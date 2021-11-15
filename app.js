const express = require('express');
const mon = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const user = require('./modules/users')
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

 