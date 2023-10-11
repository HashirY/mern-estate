import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

// thats how the server runs using a api folder and then puting it in root directory and also then changing the package.json and istalling nodemon

app.listen(3000, () => {
  console.log("Server on port 3000!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
