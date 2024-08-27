const express = require("express");
const { authMiddleware } = require("../Middlewares/authMiddleware");
const { getBalance,transferBalance } =require( "../Controllers/account");

const router = express.Router();

router.get("/balance", authMiddleware,getBalance );

router.post("/transfer", authMiddleware, transferBalance);

module.exports = router;