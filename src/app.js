/* Load Env File */
import dotEnv from 'dotenv'
dotEnv.config();

import express from "express";
const app = express();

app.get("/hello", (req, res) => {
    return res.status(200).json({
        message: "Xin chào bạn nhé"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server on at: ${process.env.HOST}:${process.env.PORT}`)
})