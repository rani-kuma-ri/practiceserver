const express=require("express");
const server=express();
server.get("/returns",(req,res)=>{
    res.send("Welcome to my API")
})
server.listen(3000,()=>{
    console.log("hello,http://localhost:3000/returns")
})