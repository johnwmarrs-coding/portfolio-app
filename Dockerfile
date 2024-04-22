# Build
FROM node:21.6.1-alpine as build
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn run build

# Production
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]