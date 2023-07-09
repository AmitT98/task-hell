const data = require('./saveTask.js')
console.log(data)
const fs = require('fs');
function  saveLocally(){
fs.writeFile("task.txt", "Hello", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
}