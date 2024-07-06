import express from 'express'
import cors from "cors"

const app = express();

//cors origin setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({limit: "16kb"}))


//import Routes
import todosRouter from "./routes/todos.route.js";

//configure routes
app.use('/api/v1/todos', todosRouter);

export default app