const express=require("express")
const server=express();
const products=[{id:1,name:"mango",price:50},{id:2,name:"apple",price:100},{id:3,name:"pineapple",price:150}]

    server.get("/idproduct/:id",(req,res)=>{
    const ids=Number(req.params.id)
    const item=products.filter((ele)=>{
        if(ele.id===ids){
            return true
        }
        else{
            return false
        }

    })
   res.json(item)
})
server.listen(3900,()=>{
    console.log("hello,http://localhost:3900/idproduct/3")
})