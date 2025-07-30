# Administración de Bordados

Una aplicación web moderna para gestionar pedidos de bordados de manera eficiente. Desarrollada con React, TypeScript y Tailwind CSS.

## Características

- ✅ **Registro de Bordados**: Formulario completo para agregar nuevos pedidos
- 📊 **Estadísticas en Tiempo Real**: Muestra bordados pendientes, completados, ingresos y vencidos
- 📱 **Integración con WhatsApp**: Click en el número de contacto abre el chat
- 📋 **Gestión de Estados**: Marcar bordados como completados/pendientes
- 💾 **Almacenamiento Local**: Los datos se guardan en el navegador
- 🎨 **Interfaz Moderna**: Diseño responsive con Tailwind CSS
- 🔍 **Filtros Automáticos**: Separación entre bordados pendientes y completados

## Tecnologías Utilizadas

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework de CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **LocalStorage** - Almacenamiento local de datos

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona o descarga el proyecto
2. Abre una terminal en la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## Funcionalidades

### Registro de Bordados

- **Nombre del Cliente**: Nombre completo del cliente
- **Número de Contacto**: Teléfono con integración a WhatsApp
- **Descripción**: Detalles del bordado a realizar
- **Cantidad**: Número de piezas
- **Precio Unitario**: Precio por pieza
- **Fecha de Entrega**: Fecha límite de entrega
- **Precio Total**: Calculado automáticamente

### Gestión de Estados

- **Bordados Pendientes**: Lista de trabajos por realizar
- **Bordados Completados**: Lista de trabajos finalizados
- **Marcar como Completado**: Cambiar estado con un click
- **Eliminar Bordado**: Eliminar registros no deseados

### Estadísticas

- **Pendientes**: Número de bordados por realizar
- **Completados**: Número de bordados finalizados
- **Ingresos Totales**: Suma de todos los bordados completados
- **Vencidos**: Bordados con fecha de entrega pasada

### Integración WhatsApp

Al hacer click en cualquier número de contacto, se abrirá automáticamente WhatsApp Web o la aplicación móvil con el número pre-cargado.

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── FormularioBordado.tsx
│   ├── TablaBordados.tsx
│   └── Estadisticas.tsx
├── services/           # Servicios de datos
│   └── bordadoService.ts
├── types/              # Definiciones TypeScript
│   └── Bordado.ts
├── App.tsx            # Componente principal
└── main.tsx           # Punto de entrada
```

## Almacenamiento de Datos

Los datos se almacenan localmente en el navegador usando `localStorage`. Esto significa que:

- Los datos persisten entre sesiones
- No se requiere servidor externo
- Los datos son privados y seguros
- Se puede exportar/importar manualmente desde las herramientas de desarrollador

## Personalización

### Colores y Estilos

Los estilos se pueden personalizar editando las clases de Tailwind CSS en los componentes:

- **Colores principales**: `blue-600`, `green-500`, `red-500`
- **Espaciado**: `p-6`, `mb-6`, `gap-4`
- **Tipografía**: `text-2xl`, `font-bold`

### Agregar Nuevas Funcionalidades

1. **Nuevos Campos**: Agregar propiedades en `types/Bordado.ts`
2. **Validaciones**: Modificar `FormularioBordado.tsx`
3. **Estadísticas**: Actualizar `Estadisticas.tsx`
4. **Persistencia**: Modificar `bordadoService.ts`

## Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Previsualiza la build
npm run lint         # Ejecuta el linter
```

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Soporte

Si tienes alguna pregunta o problema:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

---

**Desarrollado con ❤️ para la gestión eficiente de bordados**
