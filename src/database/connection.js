import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        if (connection) {
            return connection;
        }
    } catch (error) {
        console.log("Error to connect Databse: ", error);
    }
}

export {dbConnect}