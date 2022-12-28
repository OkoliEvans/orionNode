const path = require('path');

//join path
console.log(path.join(__dirname,'test','docs.html'));

//get basename
console.log(path.basename(__filename));

//get extension 
console.log(path.extname(__filename));

//get directory path
console.log(path.dirname(__filename));

//create path object
console.log(path.parse(__filename));