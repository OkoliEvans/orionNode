const fs = require("fs");
const path = require("path");

//create Folder System

fs.mkdir(path.join(__dirname, "/testnode"), {}, (err) => {
  if (err) throw err;
  console.log("folder created...");
});     

//create and write to file
fs.writeFile(
  path.join(__dirname, "/testnode", "test.txt"),
  "hello world!",
  (err) => {
    if (err) throw err;
    console.log("file created and written to...");


    // append file

    fs.appendFile(
      path.join(__dirname, "/testnode", "test.txt"),
      " I love blockchain",
      (err) => {
        if (err) throw err;
        console.log("file written to...");
      }
    );
  }
);    

// read file
fs.readFile(path.join(__dirname, '/testnode', 'test.txt'), 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data);
})     

//rename file
fs.rename(path.join(__dirname, '/testnode', 'test.txt'),
 path.join(__dirname, '/testnode', 'node5.txt'), err => {
  if (err) throw err;
  console.log(' file renamed...');
 })
          









