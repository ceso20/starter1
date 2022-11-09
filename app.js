const express = require('express');
const app = express();

// set the view engine to ejs
app.set("view engine","ejs")

var titles = [
    {name:"Anasayfa", url:"index"},
    {name:"Hakkında", url:"about"},
    {name:"İletişim", url:"ileti"},
    {name:"üyeol", url:"login"}]
  

app.use(express.static(__dirname+"/public"))

app.get("/", (req,res) =>{
  res.send("<h1>Merhaba</h1>")
})


// index screen or home
app.get("/index", (req,res) =>{
  res.render("index",{title : req.peth , titles : titles })
})

// message sen use 
app.get("/ileti", (req,res) => {
  res.render("ileti",{title : req.peth ,titles : titles })
})

// about use
app.get("/about", (req,res) => {
  res.render("about",{title : req.peth , titles : titles })
  
})

// Login screen
app.get("/login", (req,res) => {
  res.render("login",{ title : req.peth , titles : titles })
})

// not found
app.use((req,res) => {
  res.send("<h1>404 Not Found</h1>")
})

app.listen(2000, ()=>{
  console.log("started...")
})