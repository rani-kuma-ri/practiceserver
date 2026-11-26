const express=require("express")
const server=express();
const products=[{id:1,name:"mango",price:50},{id:2,name:"apple",price:100},{id:3,name:"pineapple",price:150}]
server.get("/idproduct/:name",(req,res)=>{
    const named=req.params.name
   
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
    console.log("hello,http://localhost:3900/idproduct/mango")
})