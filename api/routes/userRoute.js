import express from "express";
import { deleteUser, test } from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
