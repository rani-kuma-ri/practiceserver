const express=require("express")
const server=express();
const products=[{id:1,name:"rani",price:20},{id:2,name:"shyam",price:50},{id:3,name:"raghva",price:100}]
server.get("/api/product",(req,res)=>{
    res.json(products)

})
server.listen(3500,()=>{
    console.log("hello,http://localhost:3500/api/product")
})