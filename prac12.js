const express=require("express");
const server=express();
const products=[{id:1,name:"rani",price:20},{id:2,name:"shyam",price:50},{id:3,name:"rahul",price:100}]
server.get('/api/products/find', (req, res) => {
  const id = Number(req.query.id);
  const product = products.filter((ele) =>{
     if (ele.id === id){
        return true
     }
    });

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

server.listen(3211,()=>{
    console.log("hello,http://localhost:3211/api/products/find?id=3")
})