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
    isMoving: boolean = false
    private readonly speed = ANIMATION_SPEED
    // private testAttackCount = 0

    async init(){
        this.fsm = this.node.addComponent(PlayerStateMachine);
        await this.fsm.init();
        super.init({
            x: 2,
            y: 8,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        this.targetX = this.x;
        this.targetY = this.y;
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.inputHandle, this);
        EventManager.Instance.on(EVENT_ENUM.ATTACK_PLAYER, this.onDied, this);
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

        if(Math.abs(this.targetX - this.x) < 0.1 && Math.abs(this.targetY - this.y) < 0.1 && this.isMoving){
            this.x = this.targetX;
            this.y = this.targetY;
            this.isMoving = false;
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
    }

    inputHandle(inputDirection: CONTROLLER_ENUM){
        //攻击
        const enemyId = this.willAttack(inputDirection);
        if(enemyId){
            return;
        }

        if(this.state === ENTITY_STATE_ENUM.DEATH){
            return;
        }

        if(this.willBlock(inputDirection)){
            console.log('撞墙');
            return
        }
        this.move(inputDirection);
    }

    onAttack(enemyId: string){
        this.state = ENTITY_STATE_ENUM.ATTACK;
        EventManager.Instance.emit(EVENT_ENUM.ATTACK_ENEMY, enemyId);
        return enemyId;
    }

    willAttack(inputDirection: CONTROLLER_ENUM){
        const enemies = DataManager.Instance.enemies.filter((item)=> item.state !== ENTITY_STATE_ENUM.DEATH);
        for (let i = 0; i < enemies.length; i++) {
            const { x: enemyX, y: enemyY, id: enemyId, state: enemyState } = enemies[i];
            // if(enemyState === ENTITY_STATE_ENUM.DEATH){
            //     return '';
            // }
            if(inputDirection === CONTROLLER_ENUM.TOP && this.direction === DIRECTION_ENUM.TOP && enemyX === this.x && enemyY === this.targetY - 2){
                console.log('玩家攻击');
                return this.onAttack(enemyId);
            }else if(inputDirection === CONTROLLER_ENUM.LEFT && this.direction === DIRECTION_ENUM.LEFT && enemyX === this.targetX - 2 && enemyY === this.y){
                return this.onAttack(enemyId);
            }else if(inputDirection === CONTROLLER_ENUM.RIGHT && this.direction === DIRECTION_ENUM.RIGHT && enemyX === this.targetX + 2 && enemyY === this.y){
                // this.testAttackCount++
                // if(this.testAttackCount === 3){
                //     return false;
                // }
                return this.onAttack(enemyId);
            }else if(inputDirection === CONTROLLER_ENUM.BOTTOM && this.direction === DIRECTION_ENUM.BOTTOM && enemyX === this.x && enemyY === this.targetY + 2){
                return this.onAttack(enemyId);
            }else {
                return '';
            }
        }
    }

    willBlock(inputDirection: CONTROLLER_ENUM){
        const { targetX: x, targetY: y, direction } = this;
        const { tileInfo } = DataManager.Instance;
        if(inputDirection === CONTROLLER_ENUM.TOP){
            if(direction === DIRECTION_ENUM.TOP){
                //疑问
                const playerNextY = y - 1;
                const weaponNextY = y - 2;
                //玩家走出地图
                if(playerNextY <= 1){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }
                //下一个瓦片
                const playerTile = tileInfo[x][playerNextY];
                const weaponTile = tileInfo[x][weaponNextY];
                if(playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)){
                    //empty
                }else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }
            }else if(direction === DIRECTION_ENUM.LEFT){
                //左方向移动
                const playerNextY = y - 1;
                const weaponNextX = x - 1;
                const weaponNextY = playerNextY;
                //下一个瓦片
                const playerTile = tileInfo[x][playerNextY];
                const weaponTile = tileInfo[weaponNextX][weaponNextY];
                if(playerTile?.moveable && weaponTile.moveable){
                    //empty
                }else {
                    return true;
                }
            }else if(direction === DIRECTION_ENUM.RIGHT){
                //右方向移动
                const playerNextY = y - 1;
                const weaponNextX = x + 1;
                const weaponNextY = playerNextY;
                //下一个瓦片
                const playerTile = tileInfo[x][playerNextY];
                const weaponTile = tileInfo[weaponNextX][weaponNextY];
                if(playerTile?.moveable && weaponTile.moveable){
                    //empty
                }else {
                    return true;
                }
            }
        }else if(inputDirection === CONTROLLER_ENUM.TURNLEFT){
            let nextX
            let nextY
            if(direction === DIRECTION_ENUM.TOP){
                nextX = x - 1;
                nextY = y - 1;
            }else if(direction === DIRECTION_ENUM.BOTTOM){
                nextX = x + 1;
                nextY = y + 1;
            }else if(direction === DIRECTION_ENUM.LEFT){
                nextX = x - 1;
                nextY = y + 1;
            }else if(direction === DIRECTION_ENUM.RIGHT){
                nextX = x + 1;
                nextY = y - 1;
            }
            if(
                (!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) &&
                (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) &&
                (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)
            ){
                //empty
            }else {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                return true;
            }
        }
        return false;
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
        if(!(inputDirection === CONTROLLER_ENUM.TURNLEFT || inputDirection === CONTROLLER_ENUM.TURNRIGHT)){
            this.isMoving = true;
            // EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
    }

    onDied(type: ENTITY_STATE_ENUM){
        this.state = type;
    }

    update(){
        this.updateXY();
        super.update();
    }
}

