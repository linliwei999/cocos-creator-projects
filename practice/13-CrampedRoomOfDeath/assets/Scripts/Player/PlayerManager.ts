import {_decorator} from 'cc';
import {CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, EVENT_ENUM, SHAKE_TYPE_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";
import {EntityManager} from "db://assets/Base/EntityManager";
import DataManager from "db://assets/Runtime/DataManager";
import {IEntity} from "db://assets/Levels";
import {EnemyManager} from "db://assets/Base/EnemyManager";
import {BurstManager} from "db://assets/Scripts/Burst/BurstManager";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('PlayerManager')
export class PlayerManager extends EntityManager {
    targetX:number = 0
    targetY:number = 0
    isMoving: boolean = false
    private readonly speed = ANIMATION_SPEED
    // private testAttackCount = 0

    async init(params: IEntity){
        this.fsm = this.node.addComponent(PlayerStateMachine);
        await this.fsm.init();
        super.init(params);
        this.targetX = this.x;
        this.targetY = this.y;;
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.inputHandle, this);
        EventManager.Instance.on(EVENT_ENUM.ATTACK_PLAYER, this.onDied, this);
    }

    onDestroy() {
        super.onDestroy();
        EventManager.Instance.off(EVENT_ENUM.PLAYER_CTRL, this.inputHandle);
        EventManager.Instance.off(EVENT_ENUM.ATTACK_PLAYER, this.onDied);
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
            // console.log('撞墙');
            if(inputDirection === CONTROLLER_ENUM.TOP){
                EventManager.Instance.emit(EVENT_ENUM.SCREEN_SHAKE, SHAKE_TYPE_ENUM.TOP);
            }else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
                EventManager.Instance.emit(EVENT_ENUM.SCREEN_SHAKE, SHAKE_TYPE_ENUM.BOTTOM);
            }else if(inputDirection === CONTROLLER_ENUM.LEFT){
                EventManager.Instance.emit(EVENT_ENUM.SCREEN_SHAKE, SHAKE_TYPE_ENUM.LEFT);
            }else if(inputDirection === CONTROLLER_ENUM.RIGHT){
                EventManager.Instance.emit(EVENT_ENUM.SCREEN_SHAKE, SHAKE_TYPE_ENUM.RIGHT);
            }
            return
        }
        this.move(inputDirection);
    }

    onAttack(enemyId: string){
        if(enemyId){
            EventManager.Instance.emit(EVENT_ENUM.RECORD_STEP);
            this.state = ENTITY_STATE_ENUM.ATTACK;
            EventManager.Instance.emit(EVENT_ENUM.ATTACK_ENEMY, enemyId);
            EventManager.Instance.emit(EVENT_ENUM.DOOR_OPEN);
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }
        return enemyId;
    }

    willAttack(inputDirection: CONTROLLER_ENUM){
        const enemies = DataManager.Instance.enemies.filter((item)=> item.state !== ENTITY_STATE_ENUM.DEATH);
        for (let i = 0; i < enemies.length; i++) {
            const { x: enemyX, y: enemyY, id: enemyId, state: enemyState } = enemies[i];
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

    onAttackShake(type: SHAKE_TYPE_ENUM){
        EventManager.Instance.emit(EVENT_ENUM.SCREEN_SHAKE, type);
    }

    willBlockMy(inputDirection: CONTROLLER_ENUM){
        const { targetX: x, targetY: y, direction } = this;
        // console.log('this', this);
        const {
            tileInfo,
            door: { x: doorX, y: doorY, state: doorState },
        } = DataManager.Instance;
        const enemies = DataManager.Instance.enemies.filter((item)=> item.state !== ENTITY_STATE_ENUM.DEATH);
        const bursts = DataManager.Instance.bursts.filter((item)=> item.state !== ENTITY_STATE_ENUM.DEATH);

        //按钮方向-向上
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

                //门的碰撞
                if(((x === doorX && playerNextY === doorY) || (x === doorX && weaponNextY === doorY)) && doorState !== ENTITY_STATE_ENUM.DEATH){
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                    return true;
                }

                //敌人的碰撞
                for (let i = 0; i < enemies.length; i++) {
                    const { x: enemyX, y: enemyY, id: enemyId, state: enemyState } = enemies[i];
                    if(((x === enemyX && playerNextY === enemyY) || (x === enemyX && weaponNextY === enemyY))){
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT;
                        return true;
                    }
                }

                //地裂的碰撞
                for (let i = 0; i < bursts.length; i++) {
                    const { x: burstX, y: burstY, id: burstId, state: burstState } = bursts[i];
                    if(((x === burstX && playerNextY === burstY) || (x === burstX && weaponNextY === burstY))){
                        return false;
                    }
                }

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
            // console.log('direction', direction)
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

            //门的碰撞
            if(((x === doorX && nextY === doorY) || (nextX === doorX && y === doorY) || (nextX === doorX && nextY === doorY)) && doorState !== ENTITY_STATE_ENUM.DEATH){
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                return true;
            }

            //敌人的碰撞
            for (let i = 0; i < enemies.length; i++) {
                const { x: enemyX, y: enemyY, id: enemyId, state: enemyState } = enemies[i];
                if(((x === enemyX && nextY === enemyY) || (x === enemyX && y === enemyY) || (nextX === enemyX && nextY === enemyY))){
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT;
                    return true;
                }
            }

            //判断地图元素
            // console.log('tileInfo', tileInfo)
            // console.log('x', x)
            // console.log('nextX', nextX)
            // console.log('y', y)
            // console.log('nextY', nextY)
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

    willBlock(type: CONTROLLER_ENUM) {
        const { targetX: x, targetY: y, direction } = this
        const { tileInfo: tileInfo } = DataManager.Instance
        const enemies: EnemyManager[] = DataManager.Instance.enemies.filter(
            (enemy: EnemyManager) => enemy.state !== ENTITY_STATE_ENUM.DEATH,
        )
        const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.door || {}
        const bursts: BurstManager[] = DataManager.Instance.bursts.filter(
            (burst: BurstManager) => burst.state !== ENTITY_STATE_ENUM.DEATH,
        )

        const { mapRowCount: row, mapColumnCount: column } = DataManager.Instance

        //按钮方向——向上
        if (type === CONTROLLER_ENUM.TOP) {
            const playerNextY = y - 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextY < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                const weaponNextY = y - 2
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[x]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === x && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                // 判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === weaponNextY) || (enemyX === x && enemyY === playerNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextY < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                const weaponNextY = y
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[x]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === x && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if (enemyX === x && enemyY === playerNextY) {
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextY < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === playerNextY) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextY < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === playerNextY) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                        return true
                    }
                }

                // 判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }
            }

            //按钮方向——向下
        } else if (type === CONTROLLER_ENUM.BOTTOM) {
            const playerNextY = y + 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                if (playerNextY > column - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK

                    return true
                }

                const weaponNextY = y
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[x]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === x && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if (enemyX === x && enemyY === playerNextY) {
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK
                        return true
                    }
                }

                // 判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                if (playerNextY > column - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextY = y + 2
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[x]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === x && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                // 判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === weaponNextY) || (enemyX === x && enemyY === playerNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                if (playerNextY > column - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === playerNextY) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                if (playerNextY > column - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileInfo[x]?.[playerNextY]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === x && doorY === playerNextY) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === x && enemyY === playerNextY) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === x && burst.y === playerNextY) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }
            }

            //按钮方向——向左
        } else if (type === CONTROLLER_ENUM.LEFT) {
            const playerNextX = x - 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextX < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextX < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextX < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextX = x - 2
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[y]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === y)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === y)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextX < 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK

                    return true
                }

                const weaponNextX = x
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[y]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === y)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if (enemyX === playerNextX && enemyY === y) {
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }
            }

            //按钮方向——向右
        } else if (type === CONTROLLER_ENUM.RIGHT) {
            const playerNextX = x + 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                if (playerNextX > row - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                if (playerNextX > row - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[weaponNextY]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === weaponNextY)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === weaponNextY)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                if (playerNextX > row - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK

                    return true
                }

                const weaponNextX = x
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[y]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === y)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if (enemyX === playerNextX && enemyY === y) {
                        this.state = ENTITY_STATE_ENUM.BLOCKBACK
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                if (playerNextX > row - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextX = x + 2
                const nextPlayerTile = tileInfo[playerNextX]?.[y]
                const nextWeaponTile = tileInfo[weaponNextX]?.[y]

                //判断门
                if (
                    ((doorX === playerNextX && doorY === y) || (doorX === weaponNextX && doorY === y)) &&
                    doorState !== ENTITY_STATE_ENUM.DEATH
                ) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //判断敌人
                for (let i = 0; i < enemies.length; i++) {
                    const enemy = enemies[i]
                    const { x: enemyX, y: enemyY } = enemy

                    if ((enemyX === playerNextX && enemyY === y) || (enemyX === weaponNextX && enemyY === y)) {
                        this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                        return true
                    }
                }

                //判断地裂陷阱
                if (
                    bursts.some(burst => burst.x === playerNextX && burst.y === y) &&
                    (!nextWeaponTile || nextWeaponTile.turnable)
                ) {
                    return false
                }

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }
            }

            //按钮方向——左转
        } else if (type === CONTROLLER_ENUM.TURNLEFT) {
            let nextY, nextX
            if (direction === DIRECTION_ENUM.TOP) {
                //朝上左转的话，左上角三个tile都必须turnable为true，并且没有敌人
                nextY = y - 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                nextY = y + 1
                nextX = x + 1
            } else if (direction === DIRECTION_ENUM.LEFT) {
                nextY = y + 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                nextY = y - 1
                nextX = x + 1
            }

            //判断门
            if (
                ((doorX === x && doorY === nextY) ||
                    (doorX === nextX && doorY === y) ||
                    (doorX === nextX && doorY === nextY)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT
                return true
            }

            //判断敌人
            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i]
                const { x: enemyX, y: enemyY } = enemy

                if (enemyX === nextX && enemyY === y) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                } else if (enemyX === nextX && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                } else if (enemyX === x && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                }
            }

            //最后判断地图元素
            if (
                (!tileInfo[x]?.[nextY] || tileInfo[x]?.[nextY].turnable) &&
                (!tileInfo[nextX]?.[y] || tileInfo[nextX]?.[y].turnable) &&
                (!tileInfo[nextX]?.[nextY] || tileInfo[nextX]?.[nextY].turnable)
            ) {
                // empty
            } else {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT
                return true
            }

            //按钮方向——右转
        } else if (type === CONTROLLER_ENUM.TURNRIGHT) {
            let nextX, nextY
            if (direction === DIRECTION_ENUM.TOP) {
                //朝上右转的话，右上角三个tile都必须turnable为true
                nextY = y - 1
                nextX = x + 1
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                nextY = y + 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.LEFT) {
                nextY = y - 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                nextY = y + 1
                nextX = x + 1
            }

            //判断门
            if (
                ((doorX === x && doorY === nextY) ||
                    (doorX === nextX && doorY === y) ||
                    (doorX === nextX && doorY === nextY)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT
                return true
            }

            //判断敌人
            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i]
                const { x: enemyX, y: enemyY } = enemy

                if (enemyX === nextX && enemyY === y) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                } else if (enemyX === nextX && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                } else if (enemyX === x && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                }
            }

            //最后判断地图元素
            if (
                (!tileInfo[x]?.[nextY] || tileInfo[x]?.[nextY].turnable) &&
                (!tileInfo[nextX]?.[y] || tileInfo[nextX]?.[y].turnable) &&
                (!tileInfo[nextX]?.[nextY] || tileInfo[nextX]?.[nextY].turnable)
            ) {
                // empty
            } else {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT
                return true
            }
        }

        return false
    }

    //生成移动烟雾
    showSmoke(direction: CONTROLLER_ENUM){
        EventManager.Instance.emit(EVENT_ENUM.SHOW_SMOKE, this.x, this.y, direction);
    }

    //玩家移动
    move(inputDirection: CONTROLLER_ENUM){
        EventManager.Instance.emit(EVENT_ENUM.RECORD_STEP);
        if (inputDirection === CONTROLLER_ENUM.TOP){
            this.targetY -=1;
            this.showSmoke(inputDirection);
        }else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
            this.targetY +=1;
            this.showSmoke(inputDirection);
        }else if(inputDirection === CONTROLLER_ENUM.LEFT){
            this.targetX -=1;
            this.showSmoke(inputDirection);
        }else if(inputDirection === CONTROLLER_ENUM.RIGHT){
            this.targetX +=1;
            this.showSmoke(inputDirection);
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
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
        }else if(inputDirection === CONTROLLER_ENUM.TURNRIGHT){
            if(this.direction === DIRECTION_ENUM.TOP){
                this.direction = DIRECTION_ENUM.RIGHT;
            }else if(this.direction === DIRECTION_ENUM.LEFT){
                this.direction = DIRECTION_ENUM.TOP;
            }else if(this.direction === DIRECTION_ENUM.BOTTOM){
                this.direction = DIRECTION_ENUM.LEFT;
            }else if(this.direction === DIRECTION_ENUM.RIGHT){
                this.direction = DIRECTION_ENUM.BOTTOM;
            }
            this.state = ENTITY_STATE_ENUM.TURNRIGHT;
            EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
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

