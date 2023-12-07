// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    socket: Socket = null;

    start () {
        this.socket = io.connect("http://localhost:3000");
        // 判断是否连接成功
        this.socket.on("connect", (data)=> {
            console.log("连接成功");
            //给服务端发消息
            this.socket.emit("message", "你好，我是一个客户端");

            //客户端接收消息
            this.socket.on("message", (data)=> {
                console.log("服务端发来消息：", data);
            });
        });
         //断开连接
        this.socket.on("disconnect", (data)=> {
             
        });
    }

    update (dt) {

    }
}
