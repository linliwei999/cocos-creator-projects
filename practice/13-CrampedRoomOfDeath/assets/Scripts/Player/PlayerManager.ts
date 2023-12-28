import {_decorator} from 'cc';
import {CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('PlayerManager')
export class PlayerManager extends EntityManager {
    targetX:number = 0
    targetY:number = 0
    private readonly speed = ANIMATION_SPEED

    async init(){
        this.fsm = this.node.addComponent(PlayerStateMachine);
        await this.fsm.init();
        super.init({
            x: 0,
            y: 0,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.move, this);
    }

    updateXY(){
        if(this.targetX < this.x){
            this.x -= this.speed
        }else if(this.targetX > this.x){
            this.x += this.speed
        }

        if(this.targetY < this.y){
            this.y -= this.speed
        }else if(this.targetY > this.y){
            this.y += this.speed
        }

        if(Math.abs(this.targetX - this.x) < -0.1 && Math.abs(this.targetY - this.y) < -0.1){
            this.x = this.targetX;
            this.y = this.targetY;
        }
    }

    //玩家移动
    move(inputDirection: CONTROLLER_ENUM){
        if (inputDirection === CONTROLLER_ENUM.TOP){
            this.targetY -=1
        }else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
            this.targetY +=1
        }else if(inputDirection === CONTROLLER_ENUM.LEFT){
            this.targetX -=1
        }else if(inputDirection === CONTROLLER_ENUM.RIGHT){
            this.targetX +=1
        }else if(inputDirection === CONTROLLER_ENUM.TURNLEFT){
            if(this.direction === DIRECTION_ENUM.TOP){
                this.direction = DIRECTION_ENUM.LEFT;
            }else if(this.direction === DIRECTION_ENUM.LEFT){
                this.direction = DIRECTION_ENUM.BOTTOM;
            }else if(this.direction === DIRECTION_ENUM.BOTTOM){
                this.direction = DIRECTION_ENUM.RIGHT;
            }else if(this.direction === DIRECTION_ENUM.RIGHT){
                this.direction = DIRECTION_ENUM.TOP;
            }
            this.state = ENTITY_STATE_ENUM.TURNLEFT;
        }
    }

    update(){
        this.updateXY();
        super.update();
    }
}

