const express=require("express")
const server=express();
server.get("/about",(req,res)=>{
    res.send("<h1>My name is Rani</h1>")
})
server.listen(3001,()=>{
    console.log("hello,http://localhost:3001/about")
})