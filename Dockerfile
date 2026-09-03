# --- Build ---
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
# `npm install` et non `npm ci` : le package-lock.json est généré sous Windows et
# ne contient pas les binaires natifs Linux de rollup (bug npm npm/cli#4828).
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

# --- Runtime ---
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
