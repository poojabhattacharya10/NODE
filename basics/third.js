// file handling
// fs module
// ES6 Module System (2015)
// Node.js 2009

const fs = require('fs'); //  Module System (Common JS) (import)

const path = 'C:\\Users\\Vivek Bhattacharya\\Node.js\\node-examples\\basics\\second.js'
// const path = '\second.js'
fs.readFile(path, (err, content)=>{
    if(err){
        console.log('Error During Second file read ', err);
    }
    else{
        console.log('******* Content of second file ', content.toString());
    }
})

fs.readFile(__filename,(error,buffer)=>{
    if(error){
        console.log('Error During File Read ', error);
    }
    else{
        console.log('##### File Content is ', buffer.toString());
    }
})



function add(x,y){
    return x+y;
}
const result = add(2,3);
console.log('add result is :', result);