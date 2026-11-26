const express=require("express")
const server=express();
server.get("/api/about",(req,res)=>{
    res.json({
        name:"Rani",
        course:"web development",

    })
})
server.listen(3200,()=>{
    console.log("hello,http://localhost:3200/api/about")
})