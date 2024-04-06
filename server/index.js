import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to Database');
}).catch((err)=>{
    console.log(`error is in mongdb connection: ${err}`);
})

const app = express();

const PORT = 8000 ;

app.listen((PORT)=>{
    console.log(`server is listening on port no ${PORT}`);
})