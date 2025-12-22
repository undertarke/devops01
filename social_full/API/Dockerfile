FROM node:20

WORKDIR /expressjs

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

EXPOSE 8800

CMD ["yarn","start:prod"]

# docker build . -t img-expressjs

# docker run -d -p 8800:8800 --name cons-expressjs img-expressjs