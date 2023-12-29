import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {WoodenSkeletonStateMachine} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine";
import {EnemyManager} from "db://assets/Base/EnemyManager";
import {IEntity} from "db://assets/Levels";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('WoodenSkeletonManager')
export class WoodenSkeletonManager extends EnemyManager {
    async init(params: IEntity){
        this.fsm = this.node.addComponent(WoodenSkeletonStateMachine);
        await this.fsm.init();
        super.init(params);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack, this);
    }

    onDestroy(){
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack);
    }

    onAttack(){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player){
            return;
        }
        const { x: playerX, y: playerY, state: playerState } = DataManager.Instance.player;
        if(playerState === ENTITY_STATE_ENUM.DEATH){
            return
        }
        if(
            (this.x === playerX && Math.abs(this.y - playerY) <= 1) ||
            (this.y === playerY && Math.abs(this.x - playerX) <= 1)
        ){
            this.state = ENTITY_STATE_ENUM.ATTACK;
            //玩家切换die状态
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH);
        }else {
            this.state = ENTITY_STATE_ENUM.IDLE;
        }
    }

}

