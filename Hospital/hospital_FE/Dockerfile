FROM node:20 as build-react

WORKDIR /react-fe

COPY . .

RUN yarn install

RUN yarn build

FROM nginx
COPY --from=build-react /react-fe/dist /usr/share/nginx/html