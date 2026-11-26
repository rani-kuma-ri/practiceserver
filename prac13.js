const express=require("express")
const server=express();
const products=[{id:1,name:"mango",price:50},{id:2,name:"apple",price:100},{id:3,name:"pineapple",price:150}]
server.get("/fetch",(req,res)=>{
    const prices=req.query.pricee;
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
server.listen(3200,()=>{
    console.log("hello,http://localhost:3200/fetch?pricee=200")
})