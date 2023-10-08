import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config({ path: ".env" });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MonogoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
