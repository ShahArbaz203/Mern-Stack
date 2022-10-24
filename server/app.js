const mongoose = require('mongoose');
const express= require('express');
const app = express();

const DB = 'mongodb+srv://ShahArbaz:1234@cluster0.aozwwts.mongodb.net/mernstack?retryWrites=true&w=majority'
   
mongoose.connect(DB).then(()=>{
    console.log('connection succesfull');
}).catch((err)=>{
    console.log('no connection')
})
 
const middleware = (req,res,next) =>{
    console.log('i am middleware')
    next()
}



app.get('/',(req,res)=>{
    res.send("Hello from the server");
});
app.get('/about' ,middleware,(req,res)=>{
    res.send("Hello About from the server");
});
app.get('/contact',(req,res)=>{
    res.send("Hello contact from the server");
});
app.get('/signin',(req,res)=>{
    res.send("Hello signin from the server");
});
app.get('/signup',(req,res)=>{
    res.send("Hello signup from the server");
});

app.listen(3000,()=>{
console.log("port is running")
})