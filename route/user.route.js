const express= require('express');
const route= express.Router();

// route.get('/about',(req,res)=>{
//     res.send('Hellow Brow Iam a Javascript Programmer');
//     res.end();
// });
// route.post('/about',(req,res)=>{
//     res.send('Hey broow Iam a programmer');
//     res.end();
// });
// route.put('/about',(req,res)=>{
//     res.send('Hey broow Iam a python programmer');
//     res.end();
// });
// route.delete('/about',(req,res)=>{
//     res.send('Hey broow Iam delete hoye gesi ');
//     res.end();
// });


// JSON format add in server
route.get('/info',(req,res)=>{

    res.status(201).json({
        id:"S101",
        name:"Abu Sayed",
        work:"none"
    });

    // Dirctory changer
    // res.redirect('/home');

   res.end();
})


route.get('/login',(req,res)=>{
  // Add coockies
  res.cookie("routeName","login");
  res.cookie("patname","none");
  res.cookie("status","5858");

  // Add Header
    //  1st way
 res.header("class","oneeleven");
 res.header("pyhton","printF");
 res.header("javascript","console.log");
 
    //  2nd way

//  res.append("class","oneeleven");
//  res.append("pyhton","printF");
//  res.append("javascript","console.log");

 res.end();

});



module.exports=route;