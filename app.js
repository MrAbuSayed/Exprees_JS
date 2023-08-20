const express=require('express');
const app=express();
const userRoute= require('./route/user.route');

app.use('/route',userRoute);

app.get('/',(req,res)=>{
    res.send('Hellow Brow Whta`s up');
    res.end();
});

// html file add in server

app.use('/home',(req,res)=>{
    
    res.sendFile(__dirname+"/files/index.html")
});

app.use('/register',(req,res)=>{
    
    res.sendFile(__dirname+"/files/register.html")
    res.cookie("routeName","info");
    res.cookie("patname","index");
    res.cookie("status","nan");
    // res.end();
});



// ERROR request
app.use((req,res)=>{
 res.send("<h1>Error Madarsod</h1>");
 res.end();
});

                  

module.exports=app;