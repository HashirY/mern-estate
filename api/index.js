import express from "express";
import mongoose from "mongoose";

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

// thats how the server runs using a api folder and then puting it in root directory and also then changing the package.json and istalling nodemon

app.listen(3000, () => {
  console.log("Server on port 3000!!");
});
