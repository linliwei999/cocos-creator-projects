import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {DoorStateMachine} from "db://assets/Scripts/Door/DoorStateMachine";
import {IEntity} from "db://assets/Levels";
import {SmokeStateMachine} from "db://assets/Scripts/Smoke/SmokeStateMachine";

const { ccclass, property } = _decorator;

@ccclass('SmokeManager')
export class SmokeManager extends EntityManager {
    async init(params: IEntity){
        this.fsm = this.addComponent(SmokeStateMachine);
        await this.fsm.init();
        super.init(params);
    }
}

