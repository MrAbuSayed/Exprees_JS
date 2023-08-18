const express=require('express');
const app=express();
const userRoute= require('./route/user.route');

app.use('/user/route',userRoute);

app.get('/',(req,res)=>{
    res.send('Hellow Brow Whta`s up');
    res.end();
});
// ERROR request
app.use((req,res)=>{
 res.send("<h1>Error Madarsod</h1>");
 res.end();
});



module.exports=app;