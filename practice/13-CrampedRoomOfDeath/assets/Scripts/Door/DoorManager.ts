import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {DoorStateMachine} from "db://assets/Scripts/Door/DoorStateMachine";
import {IEntity} from "db://assets/Levels";

const { ccclass, property } = _decorator;

@ccclass('DoorManager')
export class DoorManager extends EntityManager {

    async init(params: IEntity){
        this.fsm = this.node.addComponent(DoorStateMachine);
        await this.fsm.init();
        super.init(params);
        EventManager.Instance.on(EVENT_ENUM.DOOR_OPEN, this.onOpen, this);
    }

    onDestroy(){
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.DOOR_OPEN, this.onOpen);
    }

    onOpen(){
        const allEnemyDeathFlag = DataManager.Instance.enemies.every((enemy)=> enemy.state === ENTITY_STATE_ENUM.DEATH);
        if(allEnemyDeathFlag && this.state !== ENTITY_STATE_ENUM.DEATH){
            this.state = ENTITY_STATE_ENUM.DEATH;
        }
    }
}

