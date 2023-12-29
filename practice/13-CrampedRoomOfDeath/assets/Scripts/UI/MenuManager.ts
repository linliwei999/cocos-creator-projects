import { _decorator, Component, Node } from 'cc';
import EventManager from "db://assets/Runtime/EventManager";
import {CONTROLLER_ENUM, EVENT_ENUM} from "db://assets/Enums";
const { ccclass, property } = _decorator;

@ccclass('MenuManager')
export class MenuManager extends Component {
    //撤回
    handleUndo(){
        EventManager.Instance.emit(EVENT_ENUM.REVOKE_STEP);
    }

    //重新开始
    handleRestart(){
        EventManager.Instance.emit(EVENT_ENUM.RESTART_LEVEL);
    }

    //退出
    handleOut(){
        EventManager.Instance.emit(EVENT_ENUM.OUT_BATTLE);
    }
}

