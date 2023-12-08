import ComponentBase from "./scripts/ComponentBase";
import UIManager from "./UIManager";
import Message, {MessageType} from "./scripts/Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HpControl extends ComponentBase {
    hp: number = 100;

    start () {
        //注册为UI的消息接受者
        UIManager.Instance.RegisterReceiver(this);
        console.log('UIManager', UIManager.Instance);
    }

    //接收到的消息
    ReceiveMessage(message: Message) {
        console.log('收到消息', message)
        super.ReceiveMessage(message);
        if(message.Command == MessageType.UI_RefresHp){
            //得到参数
            let num= <number>message.Content;
            this.ChangeHp(num);
        }
    }

    //改变血量
    ChangeHp(attack: number){
        this.hp -= attack;
        this.node.children[1].getComponent(cc.Label).string = String(this.hp);
    }

}
