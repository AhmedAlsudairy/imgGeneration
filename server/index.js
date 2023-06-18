import express from 'express'

import * as dotenv from 'dotenv';

import cors from 'cors'

import connectDB from './mongodb/connect.js';
import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config();

 

const app = express();

app.use(cors())


app.use(express.json({limit :'50mb'}))
app.use('/api/v1/post', postRoutes);

app.use('/api/v1/dalle' ,dalleRoutes)


app.get('/', async(req,res)=>{

res.send('Hello from dal-e 2 ')


})





const startServer = async ()=>{


    try {

app.listen(8881,()=>console.log("Server has started on port 8881"))

connectDB(process.env.MONGODB_URL)

        
    } catch (error) {
        console.log(error);
    }




}


startServer();