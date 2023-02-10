import e from "express";
import users from "../models/user.js";


export const subCoins=async (req,res)=>{
   
    try{
        console.log("subCoins");
        const id=req.body.id;
        
        const user=await users.findById(id);
        if(!user){
            return res.status(400).json({message:"user account doest not exist"});
        }
        user.coins-=20;
        const result=await user.save();
        // console.log(result);
        res.status(200).json(result);
        
    }catch(e){
        res.status(501).json({message:e.message});
    }
}
export const addCoins=async (req,res)=>{
    console.log("inside the add coins");
    try{
        const {email,amount}=req.body;
        const newAmount=Number(amount);
        const user =await users.findOne({email});
        if(!user)res.status(401).json({message:"user does not exist"});
        user.coins+=newAmount;
        const result= await user.save();
        // console.log(result);
        res.status(200).json(result);

    }catch(e){
        res.status(501).json(e);
    }
}