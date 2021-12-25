const express = require('express');
const mon = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./modules/users')
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
const ddb = 'mongodb+srv://anj:123@softproj.xnhtp.mongodb.net/FPL?retryWrites=true&w=majority'
mon.connect(ddb,{useNewUrlParser : true , useUnifiedTopology :true})
.then((res) => {
    console.log("connected");    
    app.listen(port);
})
.catch((err)=>{console.log(err)});



app.get('/',(req,res)=>{
    //res.send("We are home GF");
    const gg = user.find({}).then(()=>res.send(gg));
});


app.post('/login',(req,res)=>{  
    (async()=>{
        //console.log(req)
        const ans = await User.findOne({email : req.body.email});
        
        if(ans!==null)
        {
            const passtoken = jwt.sign(req.body.pass, process.env.ACCESS_TOKEN_SECRET);
            //console.log(passtoken);
            if(ans.password===passtoken){res.status(201).send(ans);}
            else res.send({msg : "Wrong Password"}); 
        }
        else res.send({msg : "User not found"});
        
    })().catch(e=>console.log(e));
    
    
});

app.post('/reg',(req,res)=>{
    (async()=>{
        //console.log(req)
        const ans = await User.findOne({email : req.body.email});
        
        if(ans===null)
        {
            const passtoken = jwt.sign(req.body.pass, process.env.ACCESS_TOKEN_SECRET);
            const user = new User({
                name : req.body.fullName,
                email : req.body.email,
                password : passtoken
            });
            await user.save();
            res.status(201).send({msg : "Registration successfull"})
            //console.log(passtoken);
            
        }
        else res.send({msg : "e-mail already exists. Use another one."});
        
    })().catch(e=>console.log(e));
    
})