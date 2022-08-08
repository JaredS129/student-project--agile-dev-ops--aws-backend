FROM node:14.15.0 AS build
RUN mkdir -p /app
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM public.ecr.aws/nginx/nginx:1.19-alpine

EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
