import express from "express";
import {
  google,
  signUp,
  signin,
  singOut,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signIn", signin);
router.post("/google", google);
router.get("/signout", singOut);

export default router;
