const express=require('express');
const app=express();
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('jquery',express.static(__dirname+'node_modules/jquery/dist'));

app.get("/",(req,res)=>{
      res.sendFile(__dirname+'/index.html')
});

app.get("/index",(req,res)=>{
      res.sendFile(__dirname+'/index.html')
});

app.get("/snake",(req,res)=>{
      res.sendFile(__dirname+'/snake.html')
});

app.get("/typing",(req,res)=>{
    res.sendFile(__dirname+'/typing.html')
});

app.get("/breakout",(req,res)=>{
    res.sendFile(__dirname+'/breakout.html')
});

app.get("/maze",(req,res)=>{
    res.sendFile(__dirname+'/maze.html')
});

app.get("/ludo",(req,res)=>{
    res.sendFile(__dirname+'/ludo.html')
});

app.get("/flippy",(req,res)=>{
    res.sendFile(__dirname+'/flippy.html')
});

app.get("/guessing",(req,res)=>{
    res.sendFile(__dirname+'/guessing.html')
});

app.get("/colorgame",(req,res)=>{
    res.sendFile(__dirname+'/colorgame.html')
});

app.get("/coingame",(req,res)=>{
    res.sendFile(__dirname+'/coingame.html')
});

app.get("/shapes",(req,res)=>{
    res.sendFile(__dirname+'/shapes.html')
});


app.listen(3000,()=>console.log("Server running on localhost:3000"));



<!-----run command node index.js--->
