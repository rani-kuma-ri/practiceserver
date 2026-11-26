const express=require("express")
const server=express();

server.get("/products/:id",(req,res)=>{
    const id=req.params.id;
    res.send("id:"+id)
});

server.listen(3000,()=>{
    console.log("hello,http://localhost:3000/products/2")
})