import { Router } from "express";
import { register } from "../controller/authcontroller.js";

const router = Router();

router.post('/register',register);

export default router;
