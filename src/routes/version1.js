import express from "express";
const router = express.Router();

import userModule from './modules/user.module.js'
router.use("/user", userModule)


export default router;

