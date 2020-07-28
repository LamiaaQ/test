
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
    
  files.forEach(file => {
   
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
    

});
    //console.log(html);
    //console.log(javas);
    let sum = html+javas+css+py+cpp+c;
    //console.log((html/sum)*100);
    if(html!=0)console.log(`html: ${(html/sum).toFixed(3)*100}%`);
    if(css!=0)console.log(`css: ${(css/sum).toFixed(3)*100}%`);
    if(javas!=0)console.log(`javaScript: ${(javas/sum).toFixed(3)*100}%`);
    if(py!=0)console.log(`python: ${(py/sum).toFixed(3)*100}%`);
    if(cpp!=0)console.log(`c++: ${(cpp/sum).toFixed(3)*100}%`);
    if(c!=0)console.log(`c: ${(c/sum).toFixed(3)*100}%`);
    //console.log(`${path.extname(file)}: ${(path.extname(file)/sum).toFixed(3)*100}%`);
});