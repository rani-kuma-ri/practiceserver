const express=require("express");
const server=express();
server.get("/about",(req,res)=>{
    res.send("<h1>hello everyone</h1>")
})
server.listen(3100,()=>{
    console.log("hello,http://localhost:3100/about")
})
