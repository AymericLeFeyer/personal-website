# --- Build ---
FROM node:22-alpine AS build
WORKDIR /app

# Le package-lock.json est généré sous Windows : il ne référence que les binaires
# natifs @rollup/rollup-win32-*, et npm refuse d'installer la variante Linux
# (bug npm npm/cli#4828). On résout donc l'arbre depuis package.json uniquement.
COPY package.json ./
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

# --- Runtime ---
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
