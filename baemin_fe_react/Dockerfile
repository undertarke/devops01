FROM node:20

WORKDIR /baemin_nextjs

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]

# docker build . -t img-next-baemin

# docker run -d -p 3002:3000 --name cons-next-baemin img-next-baemin