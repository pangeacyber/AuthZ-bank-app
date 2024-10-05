FROM node:lts-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9 AS build

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

FROM node:lts-alpine@sha256:c13b26e7e602ef2f1074aef304ce6e9b7dd284c419b35d89fcf3cc8e44a8def9

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
