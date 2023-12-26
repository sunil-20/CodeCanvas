//importing file system module
const fs = require("fs");

// saving file in the local computer
fs.writeFile("msg.txt", "Hi there from NodeJS !", (err)=>{
    if (err) throw err;
    console.log("The file has been saved.");
});
//reading from the local pc
fs.readFile('./msg.txt', "utf8", (err, data)=>{
    if (err) throw err;
    console.log(data);
})
