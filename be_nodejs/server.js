import express from "express"

const app = express()

app.listen(8088)

app.get("/", (req, res) => {
    res.send("Đây là trang chủ API");
})

app.get("/get-product", (req, res) => {
    let data = [{
        id: 1,
        name: "product 1"
    },
    {
        id: 2,
        name: "product 2"
    }]
    res.send(data);
})

// yarn init
// yarn add express

/**
 
 1/ install nodejs
 2/ có file package.json
 3/ install thư viện (yarn install OR npm install)
 4/ Có code, có source,...
 5/ khởi chạy server (node server.js)

 */