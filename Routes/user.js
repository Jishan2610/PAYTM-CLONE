const express=require('express');
const {authMiddleware}=require("../Middlewares/authMiddleware")
const {signUp,signIn,updateUser,getUser,getSingleUser}=require("../Controllers/user")

const router=express.Router();

////<<--------------SIGNUP-------------->>
router.post("/signup",signUp)

///<-------------SIGN IN----------------------->>

router.post("/signin",signIn)

///<<--------------UPDATE-------------------->>

router.put("/",authMiddleware,updateUser)

//<<---------Get User(Filterable)---------------->>
router.get("/bulk",authMiddleware,getUser)
router.get("/getUser", authMiddleware, getSingleUser);
  
module.exports=router

