const express=require("express");
const server=express();
products=[{id:1,name:"anjali"},{id:2,name:"shyam"},{id:3,name:"guru"}]
server.get("/api/product/count",(req,res)=>{
    
    res.json({
        count:products.length
    })
})
server.listen(3600,()=>{
    console.log("hello,http://localhost:3600/api/product/count")
})