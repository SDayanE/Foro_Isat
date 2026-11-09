# Estrategia de ramas y aprobaciones

Se sigue la sección 5 del plan técnico del Foro Web ADSO.

## Ramas
- main: versión estable; solo recibe cambios desde develop y cada versión se etiqueta.
- develop: integración de lo terminado y revisado.
- feature/<id>-<modulo>-<tarea>: funcionalidad nueva.
- fix/<id>-<modulo>-<error>: corrección de errores.
- docs/<tema>: documentación y gestión del proyecto.

## Aprobaciones
Cada cambio entra por pull request hacia develop. El autor revisa con la lista de verificación
del plan técnico (sección 5.3), deja su aprobación escrita y se integra con merge commit.
Un compañero o el instructor puede dar una segunda revisión como colaborador.

## Backlog
Cada tarea T-NN es un issue. Los defectos se registran con la etiqueta bug y se corrigen
en una rama fix/ con el mismo flujo de revisión.
