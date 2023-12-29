import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {WoodenSkeletonStateMachine} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine";
import {IEntity} from "db://assets/Levels";

const { ccclass, property } = _decorator;

@ccclass('EnemyManager')
export class EnemyManager extends EntityManager {

    async init(params: IEntity){
        super.init(params);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.ATTACK_ENEMY, this.onDeath, this);
        this.onChangeDirection(true);
    }

    onDestroy(){
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection);
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection);
        EventManager.Instance.off(EVENT_ENUM.ATTACK_ENEMY, this.onDeath);
    }

    onChangeDirection(isInit: boolean = false){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player){
            return;
        }
        const { x: playerX, y: playerY } = DataManager.Instance.player;
        const disX = Math.abs(this.x - playerX);
        const disY = Math.abs(this.y - playerY);
        if(disX === disY && !isInit){
            return
        }
        //第一象限
        if (playerX >= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.RIGHT;
        }else if (playerX <= this.x && playerY <= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.TOP : DIRECTION_ENUM.LEFT;
        }else if (playerX <= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.LEFT;
        }else if (playerX >= this.x && playerY >= this.y){
            this.direction = disY > disX ? DIRECTION_ENUM.BOTTOM : DIRECTION_ENUM.RIGHT;
        }
    }

    onDeath(id: string){
        if(this.state === ENTITY_STATE_ENUM.DEATH){
            return;
        }
        if(this.id === id){
            this.state = ENTITY_STATE_ENUM.DEATH;
        }
    }
}

