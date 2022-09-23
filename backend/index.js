import express from "express"
import mysql from "mysql"

const app = express()

//Connect to database
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2721Pgejs@Dev",
    database: "test"
})

app.get("/", (req, res) => {
    res.json("Hello guys this is my first backend")

})

app.listen(8800, ()=>{
    console.log("Connected to Backend✅")
})