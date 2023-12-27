import {_decorator, Component, Sprite, UITransform} from 'cc';
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import {
    CONTROLLER_ENUM,
    DIRECTION_ENUM,
    DIRECTION_ODER_ENUM,
    ENTITY_STATE_ENUM,
    EVENT_ENUM,
    PARAMS_NAME_ENUM
} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('PlayerManager')
export class PlayerManager extends Component {
    x:number = 0
    y:number = 0
    targetX:number = 0
    targetY:number = 0
    // private readonly speed = 1/10
    private readonly speed = ANIMATION_SPEED
    fsm: PlayerStateMachine

    private _direction: DIRECTION_ENUM
    private _state: ENTITY_STATE_ENUM

    get direction(){
        return this._direction;
    }

    set direction(newDirection){
        this._direction = newDirection;
        this.fsm.setParams(PARAMS_NAME_ENUM.DIRECTION, DIRECTION_ODER_ENUM[this._direction]);
    }

    get state(){
        return this._state;
    }

    //数据驱动视图变化
    set state(newState){
        this._state = newState;
        this.fsm.setParams(this._state, true);
    }

    async init(){
        const sprite = this.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

        this.fsm = this.node.addComponent(PlayerStateMachine);
        await this.fsm.init();
        this.state = ENTITY_STATE_ENUM.IDLE;
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
        this.node.setPosition(this.x * TILE_WIDTH - 1.5 * TILE_WIDTH, -this.y * TILE_HEIGHT + 1.5 * TILE_HEIGHT);
    }
}

