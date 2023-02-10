
import express from "express";
import { addCoins, subCoins } from "../controllers/user.js";
import isAdmin from "../middlewares/isAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";
const router=express.Router();


// this route is for subtracting coins from the coins
router.put("/sub",verifyToken,subCoins);

// this route is for adding coins in user account by admin
router.post('/add',isAdmin,addCoins)


export default router;