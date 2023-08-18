const express= require('express');
const route= express.Router();

route.get('/about',(req,res)=>{
    res.send('Hellow Brow Iam a Javascript Programmer');
    res.end();
});
route.post('/about',(req,res)=>{
    res.send('Hey broow Iam a programmer');
    res.end();
});
route.put('/about',(req,res)=>{
    res.send('Hey broow Iam a python programmer');
    res.end();
});
route.delete('/about',(req,res)=>{
    res.send('Hey broow Iam delete hoye gesi ');
    res.end();
});



module.exports=route;