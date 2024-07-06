import { Router } from "express";
import { add } from "../controllers/todos.controller.js";

const router = Router()

router.route("/add").post(add);


export default router