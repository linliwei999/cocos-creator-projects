import {_decorator, UITransform} from 'cc';
import {ENTITY_STATE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {IEntity} from "db://assets/Levels";
import {BurstStateMachine} from "db://assets/Scripts/Burst/BurstStateMachine";
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";

const { ccclass, property } = _decorator;

@ccclass('BurstManager')
export class BurstManager extends EntityManager {
    async init(params: IEntity){
        this.fsm = this.node.addComponent(BurstStateMachine);
        await this.fsm.init();
        super.init(params);
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.onBurst, this);
    }

    update(){
        this.node.setPosition(this.x * TILE_WIDTH, -this.y * TILE_HEIGHT);
    }

    onDestroy(){
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.onBurst);
    }

    onBurst(){
        if(this.state === ENTITY_STATE_ENUM.DEATH || !DataManager.Instance.player){
            return;
        }
        const { x: playerX, y: playerY, state: playerState } = DataManager.Instance.player;
        const isPlayerOnBurst = this.x === playerX && this.y === playerY;
        // console.log(this.x, playerX, this.y, playerY)
        if(isPlayerOnBurst && this.state === ENTITY_STATE_ENUM.IDLE){
            this.state = ENTITY_STATE_ENUM.ATTACK;
        }else if(this.state === ENTITY_STATE_ENUM.ATTACK){
            this.state = ENTITY_STATE_ENUM.DEATH;
            if(isPlayerOnBurst){
                EventManager.Instance.emit(EVENT_ENUM.ATTACK_PLAYER, ENTITY_STATE_ENUM.AIRDEATH);
            }
        }
    }
}

