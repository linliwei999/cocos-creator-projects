import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import DataManager from "db://assets/Runtime/DataManager";
import {IronSkeletonStateMachine} from "db://assets/Scripts/IronSkeleton/IronSkeletonStateMachine";
import {EnemyManager} from "db://assets/Base/EnemyManager";
import {IEntity} from "db://assets/Levels";

const { ccclass, property } = _decorator;

@ccclass('IronSkeletonManager')
export class IronSkeletonManager extends EnemyManager {
    async init(params: IEntity){
        this.fsm = this.node.addComponent(IronSkeletonStateMachine);
        await this.fsm.init();
        super.init(params);
    }

    onDestroy(){
        super.onDestroy();
    }
}

