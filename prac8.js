const express=require("express");
const server=express();
const products=[{id:1,name:"rani",price:20},{id:2,name:"shyam",price:50},{id:3,name:"raghva",price:100}]
server.get("/api/products",(req,res)=>{
    const prices=req.query.priced;
    const item=products.filter((ele)=>{
        if(ele.price<prices){
            return true

        }
        else{
            return false
        }
    })
    res.json(item)

})
server.listen(3710,()=>{
    console.log("hello,http://localhost:3710/api/products?priced=80")
})