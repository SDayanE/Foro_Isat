-- Foro Web ADSO - esquema de la base de datos (MySQL, motor InnoDB)
-- Siete tablas segun el plan tecnico (seccion 3.3). Tarea T-01.
-- Ejecutar: mysql -u root -p < database/esquema.sql

CREATE DATABASE IF NOT EXISTS foro DEFAULT CHARACTER SET utf8mb4;
USE foro;

-- 1. roles: el unico rol del sistema es "aprendiz"
CREATE TABLE IF NOT EXISTS roles (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre_rol VARCHAR(30) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. usuarios: solo se guarda el hash de la clave, nunca la clave en texto
CREATE TABLE IF NOT EXISTS usuarios (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  rol_id INT UNSIGNED NOT NULL,
  CONSTRAINT fk_usuarios_rol FOREIGN KEY (rol_id) REFERENCES roles(id),
  INDEX idx_usuarios_rol_id (rol_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. etiquetas: los temas del foro
CREATE TABLE IF NOT EXISTS etiquetas (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre_etiqueta VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. contenido: las preguntas (unica tabla que no va en plural)
CREATE TABLE IF NOT EXISTS contenido (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  cuerpo TEXT NOT NULL,
  estado VARCHAR(20) NOT NULL DEFAULT 'abierta',
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_id INT UNSIGNED NOT NULL,
  CONSTRAINT chk_contenido_estado CHECK (estado IN ('abierta', 'resuelta')),
  -- sin ON DELETE CASCADE: un usuario con publicaciones no se borra
  CONSTRAINT fk_contenido_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  INDEX idx_contenido_usuario_id (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- la lista de preguntas se ordena de la mas nueva a la mas vieja
CREATE INDEX idx_contenido_fecha ON contenido(fecha);

-- 5. contenido_etiquetas: relacion muchos a muchos entre preguntas y temas
CREATE TABLE IF NOT EXISTS contenido_etiquetas (
  contenido_id INT UNSIGNED NOT NULL,
  etiquetas_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (contenido_id, etiquetas_id),
  -- con CASCADE: si se borra la pregunta, se borran sus temas asociados
  CONSTRAINT fk_contenido_etiquetas_contenido FOREIGN KEY (contenido_id)
    REFERENCES contenido(id) ON DELETE CASCADE,
  CONSTRAINT fk_contenido_etiquetas_etiquetas FOREIGN KEY (etiquetas_id)
    REFERENCES etiquetas(id),
  INDEX idx_contenido_etiquetas_etiquetas_id (etiquetas_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. respuestas
CREATE TABLE IF NOT EXISTS respuestas (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  cuerpo TEXT NOT NULL,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_id INT UNSIGNED NOT NULL,
  contenido_id INT UNSIGNED NOT NULL,
  -- sin CASCADE: el usuario conserva su historial
  CONSTRAINT fk_respuestas_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  -- con CASCADE: si se borra la pregunta, se borran sus respuestas
  CONSTRAINT fk_respuestas_contenido FOREIGN KEY (contenido_id)
    REFERENCES contenido(id) ON DELETE CASCADE,
  INDEX idx_respuestas_contenido_id (contenido_id),
  INDEX idx_respuestas_usuario_id (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. reportes: los cinco motivos son los mismos de la pantalla Reportar
CREATE TABLE IF NOT EXISTS reportes (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  motivo VARCHAR(50) NOT NULL,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_id INT UNSIGNED NOT NULL,
  contenido_id INT UNSIGNED NOT NULL,
  CONSTRAINT chk_reportes_motivo CHECK (motivo IN (
    'Spam o autopromocion',
    'Contenido ofensivo',
    'Informacion peligrosa o privada',
    'No corresponde al tema',
    'Otro motivo'
  )),
  -- sin CASCADE: el usuario conserva su historial
  CONSTRAINT fk_reportes_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  -- con CASCADE: si se borra la pregunta, se borran sus reportes
  CONSTRAINT fk_reportes_contenido FOREIGN KEY (contenido_id)
    REFERENCES contenido(id) ON DELETE CASCADE,
  INDEX idx_reportes_contenido_id (contenido_id),
  INDEX idx_reportes_usuario_id (usuario_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- dato inicial: todo usuario nuevo se crea con el rol aprendiz
INSERT IGNORE INTO roles (nombre_rol) VALUES ('aprendiz');
