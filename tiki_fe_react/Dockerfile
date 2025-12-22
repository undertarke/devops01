FROM node:20

WORKDIR /tiki_nextjs

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]

# docker build . -t img-next-tiki

# docker run -d -p 3001:3000 --name cons-next-tiki img-next-tiki