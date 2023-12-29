import express from "express";
import bodyParser from "body-parser";
var colors = require("colors");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.post("/submit", (req, res) => {
    console.log(req.body);
});

console.log('OMG Rainbows!.rainbow');

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});