# Estado de seguridad de dependencias del frontend

## Alcance de la auditoría

El pipeline bloquea la integración cuando `npm audit --omit=dev --audit-level=high` detecta vulnerabilidades altas o críticas en dependencias de producción. Además, publica un informe completo con `npm audit --json` para conservar visibilidad sobre dependencias de desarrollo y herramientas de compilación.

Esta separación no declara que todo el árbol de desarrollo esté libre de vulnerabilidades: distingue el riesgo que llega a la aplicación desplegada del que afecta a herramientas usadas durante desarrollo, pruebas o compilación.

## Hallazgo pendiente en herramientas de desarrollo

A fecha 17 de noviembre de 2026, el informe completo identifica:

- Paquete: `picomatch@4.0.7`.
- Aviso: GHSA-fc5q-39xc-vjpf / CVE-2026-112366.
- Severidad: alta.
- Tipo: denegación de servicio por retroceso excesivo de expresiones regulares al procesar ciertos patrones extglob.
- Dependencias afectadas en el árbol: herramientas de Angular CLI/build, Vite, Vitest y dependencias de observación de archivos.
- Estado del aviso consultado: afecta a versiones hasta 4.0.7 y todavía no declara una versión corregida.

No se fuerza un downgrade de Angular CLI ni se aplica un override a una versión inexistente. El hallazgo permanece visible en el artefacto `auditoria-dependencias-completa` de GitHub Actions.

## Mitigación y seguimiento

1. No aceptar patrones glob/extglob proporcionados directamente por usuarios no confiables en procesos Node.js del proyecto.
2. Mantener la auditoría completa como informe publicado en cada ejecución.
3. Mantener como bloqueo el análisis de dependencias de producción.
4. Actualizar picomatch cuando el mantenedor publique una versión corregida y regenerar el lockfile.
5. Rehabilitar la auditoría completa como bloqueo cuando el árbol de desarrollo quede sin avisos altos o críticos.

La auditoría de producción y la auditoría completa son controles distintos. Un resultado correcto en la primera no equivale a afirmar que la segunda está limpia.
