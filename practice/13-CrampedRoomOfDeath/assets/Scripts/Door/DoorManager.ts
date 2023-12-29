import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {WoodenSkeletonStateMachine} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine";
import {DoorStateMachine} from "db://assets/Scripts/Door/DoorStateMachine";

const { ccclass, property } = _decorator;

@ccclass('DoorManager')
export class DoorManager extends EntityManager {

    async init(){
        this.fsm = this.node.addComponent(DoorStateMachine);
        await this.fsm.init();
        super.init({
            x: 7,
            y: 8,
            type: ENTITY_TYPE_ENUM.DOOR,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        EventManager.Instance.on(EVENT_ENUM.DOOR_OPEN, this.onOpen, this);
    }

    onDestroy(){
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.DOOR_OPEN, this.onOpen);
    }

    onOpen(){

    }
}

