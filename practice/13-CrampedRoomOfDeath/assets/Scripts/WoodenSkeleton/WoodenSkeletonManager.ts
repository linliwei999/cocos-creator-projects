import {_decorator} from 'cc';
import {CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {WoodenSkeletonStateMachine} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EntityManager {

    async init(){
        this.fsm = this.node.addComponent(WoodenSkeletonStateMachine);
        await this.fsm.init();
        super.init({
            x: 7,
            y: 7,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
    }
}

