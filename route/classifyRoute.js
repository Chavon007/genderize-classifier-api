import express from "express";
import { sendNameController } from "../controller/classifyController.js";

const router = express.Router();

router.get("/classify", sendNameController);

export default router;
