// 调试的时候把这个服务端文件拉到node环境
// 运行 -> node myserver.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
    allowEIO3: true,
    cors: {
      origin: "http://localhost:7456",
      methods: ["GET", "POST"],
      credentials: true
    }
});

//在某个端口开始监听客户端连接
http.listen(3000, ()=>{
    console.log("server listen on 3000");
});


//开始监听有客户端连接
io.on('connection', (socket)=> {
    //发送消息
    // socket.emit('message', '连接成功了');
    //监听客户端发来的消息
    console.log("有客户端连接");
    socket.on('message', (data)=>{
        console.log("客户端发来的消息: ", data);
        //给客户端发消息
        socket.emit("message", '服务端: Hello world'); 
    });
});