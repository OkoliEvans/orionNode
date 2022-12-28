const url = require('url');

const sudoUrl = new URL('http://mywebsite.com:5500/test.html?id=300&status=active');


/*
//Serialized URL
// console.log(sudoUrl.href); or
console.log(sudoUrl.toString());

//get host
console.log(sudoUrl.host);

//get hostname 
    //(...host includes port number, but hostname only shows the name)
console.log(sudoUrl.hostname);

//get pathname
console.log(sudoUrl.pathname); */

//serialized query
console.log(sudoUrl.search);

//query in object model
console.log(sudoUrl.searchParams);

//Add params
sudoUrl.searchParams.append('base', '1e33aTkI7009eZ');
console.log(sudoUrl.searchParams);

//Loop through params
sudoUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));