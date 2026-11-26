const express=require("express")
const server=express();
server.get("/products",(req,res)=>{
    const category=req.query.category;
    res.send("category:"+category);
});
server.listen(3000,()=>{
    console.log("hello,http://localhost:3000/products?category=xys")
})