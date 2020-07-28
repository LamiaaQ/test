
const testFolder = './myFolder';
const fs = require('fs');
var path = require('path');

fs.readdir(testFolder, (err, files) => {
    let javas=0;
    let c=0;
    let cpp=0;
    let css=0;
    let html=0;
    let py=0;
   // console.log(files.length); 
    //console.log(py);
  files.forEach(file => {
   // console.log(file);
   // console.log(path.extname(file));
    if(path.extname(file)== '.html'){
        html++;
    }
    if(path.extname(file)== '.js'){
        javas++;
    }
    if(path.extname(file)== '.py'){
        py++;
    }
    if(path.extname(file)== '.cpp'){
        cpp++;
    }
    if(path.extname(file)== '.c'){
        c++;
    }
    if(path.extname(file)== '.css'){
        css++;
    }
    
   //var ar = file.split('.');
});
   // console.log(html);
    //console.log(javas);
    let sum = html+javas+css+py+cpp+c;
    //console.log((html/sum)*100);
    console.log(`html: ${(html/sum)*100}%`);
    console.log(`css: ${(css/sum)*100}%`);
    console.log(`javaScript: ${(javas/sum)*100}%`);
    console.log(`python: ${(py/sum)*100}%`);
    console.log(`c++: ${(cpp/sum)*100}%`);
    console.log(`c: ${(c/sum)*100}%`);
});