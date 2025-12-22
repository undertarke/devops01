import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"157.245.200.177",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 