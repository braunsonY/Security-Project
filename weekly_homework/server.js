

const express = require('express');
const bodyParser = require('body-parser');
const https = require("https")
const md5 = require("md5")
const port = 3000;
const app = express();
const fs = require('fs')
 
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello browser")
}); 

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
      passphrase: ("P@ssw0rd")
    },
    app
  )
  .listen(3000, () => {
    console.log("Listening...");
  });



app.post("/login", (req, res) => {
  console.log(JSON.stringify(req.body));
  if (
    req.body.userName == "you18012@byui.edu" &&
    md5(req.body.password) == "33516a79199bf858d379a392d244001e"
  ) {
    res.send("Welcome!");
  } else {
    res.send("Who are you?");
  }
});  
