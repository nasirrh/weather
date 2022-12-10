const EvenEmitter = require("events");
// const EvenEmitter = new event.EvenEmitter();
const event = new EvenEmitter();
// event.on('sayMyName',()=>{
//     console.log("nasir bhai");
// });
// event.on('sayMyName',()=>{
//     console.log("nasir bhai");
// });
// event.emit("sayMyName");
event.on("checkpage",(sc,msg)=>{
    console.log(`cosguwefb ${sc} anjkdfhws ${msg}`);
})
event.emit("checkpage",200,"ok");