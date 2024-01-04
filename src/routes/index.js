import express from "express";
const router = express.Router();

import userController from "../controllers/user.controller.js";
router.get("/user", userController.findMany)


export default router;

