const express=require("express");
const server=express();
const products=[{id:1,name:"rani",price:20},{id:2,name:"shyam",price:50},{id:3,name:"rahul",price:100}]
server.get("/search",(req,res)=>{
    const named=req.query.names;
    const item=products.filter((ele)=>{
        if(ele.name===named){
            return true
        }
        else{
            return false
        }
    })
    res.json(item)
})
server.listen(3900,()=>{
    console.log("hello,http://localhost:3900/search?names=shyam")
})