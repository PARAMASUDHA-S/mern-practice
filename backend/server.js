const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, this is my first server!");
});
app.get("/about",(req,res)=> {
    res.send("this is the about page");
});
app.get("/contact",(req,res)=>{
    res.send("contact us at 000-2344-4567");
});
app.get("/products",(req,res)=>{
    res.json(
        [
           {"id":1,"name":"laptop"},
            {"id":2,"name":"phone"},
            {"id":3,"name":"smartwatch"}
        ]
    );
});
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});

let markss = [35, 50, 60, 80]; 
let scores=markss.map(num=>num*2);
console.log(scores);
