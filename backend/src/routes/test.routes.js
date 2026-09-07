const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.json({
        message:"Test route is running"
    });
});
module.exports=router;