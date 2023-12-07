// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import MessageControl from "./MessageControl";
import PaojieControl from "./PaojieControl";

const {ccclass, property} = cc._decorator;

class Message {
    name: string;
    content: string;
    face: string;
    mouth: string;

    constructor(name: string, content: string, face: string, mouth: string){
        this.name = name;
        this.content = content;
        this.face = face;
        this.mouth = mouth;
    }
}

@ccclass
export default class BgControl extends cc.Component {
    //人物和消息的控制器
    @property(PaojieControl)
    paojieControl: PaojieControl = null;

    @property(MessageControl)
    messageControl: MessageControl = null;

    //消息数组
    megs: Message[] = null;
    //当前消息索引
    index: number = 0;

    start () {
        //初始化消息数组
        this.megs = [
            new Message("御坂美琴", "今天天气不错", "对话框/paojieface_02", "对话框/paojiemouth_02"),
            new Message("御坂美琴", "来喝点饮料", "对话框/paojieface_02", "对话框/paojiemouth_02"),
            new Message("御坂美琴", "可惜贩卖机坏了", "对话框/paojieface_01", "对话框/paojiemouth_01"),
        ];
        //鼠标点击对话
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event)=> {
            if(this.index <this.megs.length){
                //如果对话面板没显示 -> 显示
                if(this.messageControl.node.active === false){
                    this.messageControl.node.active = true;
                }
                //读消息
                let message = this.megs[this.index++];
                //显示消息
                this.paojieControl.setImage(message.face, message.mouth);
                this.messageControl.setMessage(message.name, message.content);
            }
        });
    }

    update (dt) {}
}
