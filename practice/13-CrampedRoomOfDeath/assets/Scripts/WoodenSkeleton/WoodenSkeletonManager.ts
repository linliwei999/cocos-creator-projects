import {_decorator} from 'cc';
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
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
        EventManager.Instance.on(EVENT_ENUM.PLAYER_BORN, this.onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onChangeDirection, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onAttack, this);
        this.onChangeDirection(true);
    }

    onChangeDirection(isInit: boolean = false){
        if(!DataManager.Instance.player){
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

    onAttack(){
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

