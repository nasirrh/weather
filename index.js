const http = require('http');
const fs = require('fs');
var requests = require("requests");
const homefile = fs.readFileSync('home.html', 'utf-8');
const replaceVal = (tempVal, orgVal)=>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    // console.log(temperature);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name );
    return temperature;
}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=28.5355&lon=77.3910&appid=2f25c77714e01941f845cb430616eacd")
            .on('data', (chunk) =>{
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                // console.log(arrData[0].main.temp);
                const realtimeData = arrData
                .map((val )=>replaceVal(homefile,val))
                .join("");
                    res.write(realtimeData);
                    // console.log(realtimeData);
                })
                
            
            .on('end', (err)=> {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
})
server.listen(8000,"127.0.0.1")