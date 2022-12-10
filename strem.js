const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on("request",(req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     res.end(data.toString())
    // })
    const rstrm = fs.createReadStream("input.txt");
    rstrm.pipe(res)
//     rstrm.on("data",(chunk)=>{
// res.write(chunk)
//     })
//     rstrm.on("end",()=>{
//         res.end()
//     })
//     rstrm.on('error',(err)=>{
//         console.log(err);
//         res.end("file not found")
    // })
    
})

server.listen(8000,"127.0.0.1")