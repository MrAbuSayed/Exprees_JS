const app=require('./app');
const serverPORT=1000;
app.listen(serverPORT,()=>{
console.log(`The server run on the http://localhost:${serverPORT}/`);
});
