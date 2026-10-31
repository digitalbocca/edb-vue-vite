FROM node:26.13.0-alpine AS build

WORKDIR /app

COPY package.json package-lock.json .npmrc ./

RUN npm ci

COPY . .

ARG VITE_API_BASE_URL
ARG VITE_ENV_EXAMPLE
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_ENV_EXAMPLE=$VITE_ENV_EXAMPLE

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
