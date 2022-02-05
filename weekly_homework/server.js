const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

var md5 = require('md5');
 
console.log(md5('message'));

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello browser")
}); 

app.post('/login', (req,res)=> {
    if(req.body.userName =="you18012@byui.edu" && req.body.password =="33516a79199bf858d379a392d244001e"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?")
    }
});


app.listen(port, ()=>{}); 

//note 

