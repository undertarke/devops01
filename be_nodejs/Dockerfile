FROM --platform=linux/amd64 node:20 

WORKDIR /root/backend_nodejs

COPY package.json .

RUN yarn config set network-timeout 3000000 

RUN yarn install

COPY prisma ./prisma

RUN yarn prisma generate

COPY . .

EXPOSE 8088

CMD ["node","server.js"]

# docker build . -t img-node

# html
# react
# nodejs express
# nextjs FE-BE
# nestjs BE
# .NET
# mysql
# postgres
# sql server