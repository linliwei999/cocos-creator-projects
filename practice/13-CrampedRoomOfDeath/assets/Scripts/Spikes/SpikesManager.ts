import {_decorator, Component, Sprite, UITransform} from 'cc';
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import {
    CONTROLLER_ENUM,
    DIRECTION_ENUM,
    DIRECTION_ODER_ENUM,
    ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM,
    EVENT_ENUM,
    PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM
} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";
import {IEntity, ISpikes} from "db://assets/Levels";
import {WoodenSkeletonStateMachine} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine";
import {StateMachine} from "db://assets/Base/StateMachine";
import {randomStringByLength} from "db://assets/Utils";
import {SpikesStateMachine} from "db://assets/Scripts/Spikes/SpikesStateMachine";
import DataManager from "db://assets/Runtime/DataManager";

const { ccclass, property } = _decorator;

@ccclass('SpikesManager')
export class SpikesManager extends Component {
    id: string = randomStringByLength(12)
    x:number = 0
    y:number = 0
    fsm: StateMachine

    private _count: number
    private _totalCount: number
    private type: ENTITY_TYPE_ENUM

    get count(){
        return this._count;
    }

    set count(newCount){
        this._count = newCount;
        this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_CURRENT_COUNT, newCount);
    }

    get totalCount(){
        return this._totalCount;
    }

    //数据驱动视图变化
    set totalCount(newTotalCount){
        this._totalCount = newTotalCount;
        this.fsm.setParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, newTotalCount);
    }

    async init(params: ISpikes){
        const sprite = this.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

        // 注册状态机
        this.fsm = this.node.addComponent(SpikesStateMachine);
        await this.fsm.init();

        this.x = params.x;
        this.y = params.y;
        this.type = params.type;
        this.totalCount = SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM[this.type];
        this.count = params.count;

        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onLoop, this);
    }

    update(){
        this.node.setPosition(this.x * TILE_WIDTH - 1.5 * TILE_WIDTH, -this.y * TILE_HEIGHT + 1.5 * TILE_HEIGHT);
    }

    onDestroy(){
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onLoop);
    }

    onLoop(){
        if(this.count === this.totalCount){
            this.count = 1;
        }else {
            this.count++;
        }
        this.onAttack();
    }

    backZero(){
        this.count = 0;
    }

    onAttack(){
      const player = DataManager.Instance.player;
      if(!player) return
      const { x: playerX, y: playerY } = player;
      if(this.x === playerX && this.y === playerY && this.count === this.totalCount){
        EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.DEATH);
      }
    }
}

