import ManagerBase from "./scripts/ManagerBase";
import {MessageType} from "./scripts/Message";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {
    static Instance: UIManager;

    // constructor(props) {
    //     super();
    //     if(!UIManager.Instance){
    //         UIManager.Instance = this;
    //     }
    // }

    onLoad(){
        super.onLoad();
        UIManager.Instance = this;
    }

    //接收的消息类型
    SetMessageType(){
        return MessageType.Type_UI;
    }
}
