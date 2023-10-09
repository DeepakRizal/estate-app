import express from "express";
import { google, signUp, signin } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signIn", signin);
router.post("/google", google);

export default router;
