import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyUser } from "../utils/verifyUser.js";
// dont forget to add .js at the end

const router = express.Router();
router.get("/test", test);
router.post("/update/:id", verifyUser, updateUser);

export default router;
