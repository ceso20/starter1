const express = requir('express');
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>MUSTAFA</h1>")
})

app.listen(2000,() => {
    console.log("started...");
})
