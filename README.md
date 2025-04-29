# EfireX Website

## Descripción

Sitio web oficial de EfireX TRPL-E, una solución innovadora de seguridad contra incendios. El sitio está construido con Next.js 14, TailwindCSS y soporte para internacionalización (i18n).

## Mejoras Implementadas

- **Dockerfile Optimizado**: Implementación multi-etapa para reducir el tamaño de la imagen y mejorar los tiempos de construcción.
- **Configuración de Railway**: Actualizada para utilizar el Dockerfile personalizado.
- **Optimización CSS**: Integración de autoprefixer y cssnano para producción.
- **Configuración Next.js**: Mejoras en rendimiento, seguridad y optimización de imágenes.
- **Soporte i18n**: Configuración para inglés y español con detección automática de idioma.

## Requisitos

- Node.js 20.x o superior
- PNPM 10.x o superior

## Desarrollo Local

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/efirex-website.git
cd efirex-website
```

2. Instalar dependencias

```bash
pnpm install
```

3. Iniciar servidor de desarrollo

```bash
pnpm dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Construcción para Producción

```bash
pnpm build
```

Para iniciar la versión de producción localmente:

```bash
pnpm start
```

## Despliegue en Railway

El proyecto está configurado para desplegarse automáticamente en Railway utilizando el Dockerfile personalizado. Railway detectará automáticamente la configuración en `railway.json`.

## Estructura del Proyecto

```
/
├── public/            # Archivos estáticos
├── src/
│   ├── app/           # Rutas y páginas (Next.js App Router)
│   │   ├── en/        # Contenido en inglés
│   │   ├── es/        # Contenido en español
│   │   └── globals.css # Estilos globales
│   ├── components/    # Componentes reutilizables
│   ├── hooks/         # Hooks personalizados
│   └── lib/           # Utilidades y funciones auxiliares
├── .next/             # Archivos generados por Next.js (ignorados por git)
├── Dockerfile         # Configuración para construcción en contenedores
├── next.config.ts     # Configuración de Next.js
├── railway.json       # Configuración para despliegue en Railway
└── tailwind.config.ts # Configuración de TailwindCSS
```

## Características

- **Internacionalización**: Soporte para múltiples idiomas (inglés y español)
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Optimización de Imágenes**: Formato AVIF y WebP para mejor rendimiento
- **Integración de Chat**: Fastbots.ai integrado para soporte al cliente

## Tecnologías Utilizadas

- **Next.js 14**: Framework React con renderizado del lado del servidor
- **TailwindCSS**: Framework CSS utilitario
- **Radix UI**: Componentes accesibles y personalizables
- **TypeScript**: Tipado estático para JavaScript
- **Docker**: Contenedorización para desarrollo y despliegue consistentes

## Licencia

Todos los derechos reservados © EfireX
