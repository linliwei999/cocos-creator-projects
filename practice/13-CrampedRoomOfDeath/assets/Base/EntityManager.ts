import {_decorator, Component, Sprite, UITransform} from 'cc';
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import {
    CONTROLLER_ENUM,
    DIRECTION_ENUM,
    DIRECTION_ODER_ENUM,
    ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM,
    EVENT_ENUM,
    PARAMS_NAME_ENUM
} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";
import {IEntity} from "db://assets/Levels";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('EntityManager')
export class EntityManager extends Component {
    x:number = 0
    y:number = 0
    fsm: PlayerStateMachine

    private _direction: DIRECTION_ENUM
    private _state: ENTITY_STATE_ENUM
    private type: ENTITY_TYPE_ENUM

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

    async init(params: IEntity){
        const sprite = this.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

        this.x = params.x;
        this.y = params.y;
        this.type = params.type;
        this.direction = params.direction;
        this.state = params.state;
    }

    update(){
        this.node.setPosition(this.x * TILE_WIDTH - 1.5 * TILE_WIDTH, -this.y * TILE_HEIGHT + 1.5 * TILE_HEIGHT);
    }
}

