FROM node:lts-alpine@sha256:f8c7230e119ab657a4adda992f7dad2b2b068029c7710f53d930673a8eb2a1e8 AS build

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production

RUN npm run build
RUN npm prune --production

# ---------------

FROM node:lts-alpine@sha256:f8c7230e119ab657a4adda992f7dad2b2b068029c7710f53d930673a8eb2a1e8

ENV NODE_ENV=production
ENV API_PORT=3001

WORKDIR /app

COPY --from=build /app/.next .next
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/.env.local .
COPY --from=build /app/api-server.js .
COPY --from=build /app/package.json .

EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["npm", "start"]
COPY --from=build /app/next.config.js .
