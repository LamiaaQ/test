
const testFolder = './myFolder';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    let javas=0;
    let c=0;
    let cpp=0;
    let css=0;
    let html=0;
    let py=0;
    console.log(py);
  files.forEach(file => {
    console.log(file);
    
  });
});