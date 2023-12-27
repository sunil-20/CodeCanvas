 
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Hello, World!</h1>");
});
//more endpoints
app.get("/about", (req, res)=>{
    res.send("<h1>About Me</h1>");
});
//more endpoints
app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Me</h1>");
});
app.listen(3000,()=>{
    console.log(`Server running on port ${port}.`);
})  