import express from "express";
import { test } from "../controllers/user.controller.js";
// dont forget to add .js at the end

const router = express.Router();
router.get("/test", test);

export default router;
