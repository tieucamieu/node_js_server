/* Load Env File */
import dotEnv from 'dotenv'
dotEnv.config();

import express from "express";
const app = express();

import bodyParser from 'body-parser';
app.use(bodyParser.json())

import Api from './routes/index.js'
app.use('/api', Api)

app.listen(process.env.PORT, () => {
    console.log(`Server on at: ${process.env.HOST}:${process.env.PORT}`)
})