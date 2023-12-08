import MessageCenter from "./scripts/MessageCenter";
import {MessageType} from "./scripts/Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {

    start () {
        //点击
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event)=> {
            //血量减少
            MessageCenter.SendCustomMessage(MessageType.Type_UI, MessageType.UI_RefresHp, 10);
        });
    }

    update (dt) {

    }
}
