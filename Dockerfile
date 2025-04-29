# Etapa base
FROM node:20-alpine AS base

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@10.0.0-rc.2 --activate

# Configurar variables de entorno para pnpm
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN mkdir -p /pnpm/store

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY next.config.ts tsconfig.json ./

# Instalar dependencias con caché optimizado
RUN --mount=type=cache,id=buildkit.pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Copiar el resto de archivos
COPY . .

# Construir la aplicación
RUN pnpm build

# Etapa de producción
FROM node:20-alpine AS production

# Establecer directorio de trabajo
WORKDIR /app

# Instalar pnpm
RUN corepack enable && corepack prepare pnpm@10.0.0-rc.2 --activate

# Copiar archivos necesarios desde la etapa de construcción
COPY --from=base /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.ts ./

# Instalar solo dependencias de producción
RUN pnpm install --prod --frozen-lockfile

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "start"]
