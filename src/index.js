import dotenv from 'dotenv'
import app from './app.js';
import { dbConnect } from './database/connection.js';

dotenv.config({
    path: './.env'
});

const port = process.env.PORT;

dbConnect()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Listening At ", port);
    })
})
.catch(error=>{
    console.log("MongoDB Connection Error. ", error);
})