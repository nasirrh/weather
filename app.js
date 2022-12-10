// const bioData = {
//     name : "vinod",
//     age : 26,
//     channel :"thapa"
// }
// const ds = require("fs")
// console.log(bioData.age);
// const daya = JSON.stringify(bioData);
// ds.writeFile("json1.json",daya,(err)=> {
//     console.log("done");
// });
// ds.readFile("json1.json","utf-8" ,(err,data)=>{
//     console.log(data);
//     const orgdata =JSON.parse(data);
//     console.log(orgdata);

// })
// console.log(daya);
// const objdata = JSON.parse(daya)
// console.log(objdat
const http = require('http');
const fs = require('fs');
const path = require('path')
const server = http.createServer((req,res)=>{
    
const data = fs.readFileSync(`${__dirname}/userapi/index.json`, "utf-8");
const objdata = JSON.parse(data);
    if(req.url == "/")
    {
        res.end("hello brother")
    }else if(req.url == "/api"){
// res.writeHead(200,{"content-type": "application/json"});
            res.end(objdata[0].name);

}else{
    res.writeHead(200,{"content-type":"text/html"});
        res.end("<h1>404 error</h1>");
    }
});
server.listen(8080, ()=>{
    console.log("lisen 8080");
});

