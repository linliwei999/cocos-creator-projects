import { _decorator, Component, Node } from 'cc';
import EventManager from "db://assets/Runtime/EventManager";
import {CONTROLLER_ENUM, EVENT_ENUM} from "db://assets/Enums";
const { ccclass, property } = _decorator;

@ccclass('ControlManager')
export class ControlManager extends Component {
    handleCtrl(evt: Event, type: string){
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_CTRL, type as CONTROLLER_ENUM);
    }
}

