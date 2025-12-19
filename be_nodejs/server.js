import express from "express"

const app = express()

app.listen(8088)

app.get("/", (req, res) => {
    res.send("Đây là trang chủ API");
})

app.get("/get-product", async (req, res) => {
    
    process.exit(1);
})
 /*
    CSDL: MySQL
    Prisma v5 ORM
   B1: yarn add prisma@5.17.0 @prisma/client@5.17.0
   B2: yarn prisma init (npx prisma init)
   B3: Sửa chuổi kết nối CSDL
   B4: yarn prisma db pull
   B5: yarn prisma generate
 */


// yarn init
// yarn add express

/**
 
 1/ install nodejs
 2/ có file package.json
 3/ install thư viện (yarn install OR npm install)
 4/ Có code, có source,...
 5/ khởi chạy server (node server.js)

 */

