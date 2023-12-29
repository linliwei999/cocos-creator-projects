import {_decorator, Component, Node} from 'cc';
import {TileMapManager} from "db://assets/Scripts/Tile/TileMapManager";
import {createUINode} from "db://assets/Utils";
import Levels, {ILevel} from "db://assets/Levels";
import DataManager, {IRecord} from "db://assets/Runtime/DataManager";
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import EventManager from "db://assets/Runtime/EventManager";
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import {PlayerManager} from "db://assets/Scripts/Player/PlayerManager";
import {WoodenSkeletonManager} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonManager";
import {IronSkeletonManager} from "db://assets/Scripts/IronSkeleton/IronSkeletonManager";
import {DoorManager} from "db://assets/Scripts/Door/DoorManager";
import {BurstManager} from "db://assets/Scripts/Burst/BurstManager";
import {SpikesManager} from "db://assets/Scripts/Spikes/SpikesManager";
import {SmokeManager} from "db://assets/Scripts/Smoke/SmokeManager";
import FadeManager from "db://assets/Runtime/FadeManager";
import {ShakeManager} from "db://assets/Scripts/UI/ShakeManager";

const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    level: ILevel
    stage: Node
    private smokeLayer: Node

    onLoad(){
        DataManager.Instance.levelIndex = 1;
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this.nextLevel, this);
        EventManager.Instance.on(EVENT_ENUM.PLAYER_MOVE_END, this.checkArrivedDoor, this);
        EventManager.Instance.on(EVENT_ENUM.SHOW_SMOKE, this.generateSmoke, this);
        EventManager.Instance.on(EVENT_ENUM.RECORD_STEP, this.record, this);
        EventManager.Instance.on(EVENT_ENUM.REVOKE_STEP, this.revoke, this);
    }

    onDestroy(){
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this.nextLevel);
        EventManager.Instance.off(EVENT_ENUM.PLAYER_MOVE_END, this.checkArrivedDoor);
        EventManager.Instance.off(EVENT_ENUM.SHOW_SMOKE, this.generateSmoke);
        EventManager.Instance.off(EVENT_ENUM.RECORD_STEP, this.record);
        EventManager.Instance.off(EVENT_ENUM.REVOKE_STEP, this.revoke);
    }

    start () {
        this.generateStage();
        this.initLevel();
    }

    async initLevel(){
        const level = Levels[`level${DataManager.Instance.levelIndex}`];
        if(level){
            await FadeManager.Instance.fader.fadeIn();
            this.clearLevel();
            this.level = level;
            //把地图数据存到数据中心(单例)
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;

            await Promise.all([
                this.generateTileMap(),
                this.generateBursts(),
                this.generateSpikes(),
                this.generateSmokeLayer(),
                this.generateDoor(),
                this.generateEnemies(),
                this.generatePlayer(),
            ]);

            await FadeManager.Instance.fader.fadeOut();
        }
    }

    //是否切换下一关
    checkArrivedDoor(){
        const {
            player: { x: playerX, y: playerY },
            door: { x: doorX, y: doorY, state: doorState }
        } = DataManager.Instance;
        if(playerX === doorX && playerY === doorY && doorState === ENTITY_STATE_ENUM.DEATH){
            this.nextLevel();
        }
    }

    //下一关函数
    nextLevel(){
        DataManager.Instance.levelIndex++
        this.initLevel();
    }

    clearLevel(){
        this.stage.destroyAllChildren();
        DataManager.Instance.reset();
    }

    generateStage(){
        //创建舞台
        this.stage = createUINode();
        this.stage.setParent(this.node);
        this.stage.addComponent(ShakeManager);
    }

    //生成地图
    async generateTileMap(){
        const tileMap = createUINode();
        tileMap.setParent(this.stage);
        const tileManager = tileMap.addComponent(TileMapManager);
        await tileManager.init();
        this.adaptPos();
    }

    //生成玩家
    async generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playerManager = player.addComponent(PlayerManager);
        await playerManager.init(this.level.player);
        DataManager.Instance.player = playerManager;
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_BORN, true);
    }

    //生成敌人
    async generateEnemies(){
        const promise = [];
        for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i];
            //生成木骷髅
            const node = createUINode();
            node.setParent(this.stage);
            const Manager = enemy.type === ENTITY_TYPE_ENUM.SKELETON_WOODEN ? WoodenSkeletonManager : IronSkeletonManager;
            const manager = node.addComponent(Manager);
            promise.push(manager.init(enemy));
            DataManager.Instance.enemies.push(manager);
        }
        await Promise.all(promise);
    }

    //生成门
    async generateDoor(){
        const door = createUINode();
        door.setParent(this.stage);
        const doorManager = door.addComponent(DoorManager);
        await doorManager.init(this.level.door);
        DataManager.Instance.door = doorManager;
    }

    //地裂瓦片
    async generateBursts(){
        const promise = [];
        for (let i = 0; i < this.level.bursts.length; i++) {
            const burst = this.level.bursts[i];
            //生成木骷髅
            const node = createUINode();
            node.setParent(this.stage);
            const burstManager = node.addComponent(BurstManager);
            promise.push(burstManager.init(burst));
            DataManager.Instance.bursts.push(burstManager);
        }
        await Promise.all(promise);
    }

    //地刺
    async generateSpikes(){
        const promise = [];
        for (let i = 0; i < this.level.spikes.length; i++) {
            const spikes = this.level.spikes[i];
            //生成木骷髅
            const node = createUINode();
            node.setParent(this.stage);
            const spikesManager = node.addComponent(SpikesManager);
            promise.push(spikesManager.init(spikes));
            DataManager.Instance.spikes.push(spikesManager);
        }
        await Promise.all(promise);
    }

    async generateSmokeLayer(){
        this.smokeLayer = createUINode();
        this.smokeLayer.setParent(this.stage);
    }

    //生成烟雾
    async generateSmoke(x: number, y: number, direction: DIRECTION_ENUM){
        //缓存池
        const item = DataManager.Instance.smokes.find(smoke => smoke.state === ENTITY_STATE_ENUM.DEATH);
        if(item){
            console.log('smoke cache pool');
           item.x = x;
           item.y = y;
           item.direction = direction;
           // item.node.setPosition();
           item.state = ENTITY_STATE_ENUM.IDLE;
        }else {
            const smoke = createUINode();
            smoke.setParent(this.smokeLayer);
            const smokeManager = smoke.addComponent(SmokeManager);
            await smokeManager.init({
                x,
                y,
                direction,
                type: ENTITY_TYPE_ENUM.SMOKE,
                state: ENTITY_STATE_ENUM.IDLE,
            });
            DataManager.Instance.smokes.push(smokeManager);
        }
    }

    //瓦片地图适配屏幕
    adaptPos () {
        const { mapRowCount, mapColumnCount } = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount / 2;
        const disY = TILE_HEIGHT * mapColumnCount / 2 + 80;
        this.stage.getComponent(ShakeManager).stop();
        this.stage.setPosition(-disX, disY);
    }

    //保存数据 -> 记录玩家移动数据
    record(){
        const item: IRecord = {
            player: {
                x: DataManager.Instance.player.x,
                y: DataManager.Instance.player.y,
                direction: DataManager.Instance.player.direction,
                type: DataManager.Instance.player.type,
                state: (DataManager.Instance.player.state === ENTITY_STATE_ENUM.IDLE || DataManager.Instance.player.state === ENTITY_STATE_ENUM.DEATH || DataManager.Instance.player.state === ENTITY_STATE_ENUM.AIRDEATH) ? DataManager.Instance.player.state : ENTITY_STATE_ENUM.IDLE,
            },
            door: {
                x: DataManager.Instance.door.x,
                y: DataManager.Instance.door.y,
                direction: DataManager.Instance.door.direction,
                type: DataManager.Instance.door.type,
                state: DataManager.Instance.door.state,
            },
            enemies: DataManager.Instance.enemies.map(({x, y, direction, type, state}) =>({
                x,
                y,
                direction,
                type,
                state,
            })),
            bursts: DataManager.Instance.bursts.map(({x, y, direction, type, state}) =>({
                x,
                y,
                direction,
                type,
                state,
            })),
            spikes: DataManager.Instance.spikes.map(({x, y, count, type}) =>({
                x,
                y,
                count,
                type,
            })),
        };
        DataManager.Instance.records.push(item);
    }

    //撤回
    revoke(){
        const item = DataManager.Instance.records.pop();
        if(item){
            //疑问
            // DataManager.Instance.player = item.player
            DataManager.Instance.player.x = DataManager.Instance.player.targetX = item.player.x;
            DataManager.Instance.player.y = DataManager.Instance.player.targetY = item.player.y;
            DataManager.Instance.player.direction = item.player.direction;
            DataManager.Instance.player.state = item.player.state;

            DataManager.Instance.door.x = item.door.x;
            DataManager.Instance.door.y = item.door.y;
            DataManager.Instance.door.direction = item.door.direction;
            DataManager.Instance.door.state = item.door.state;

            for (let i = 0; i < DataManager.Instance.enemies.length; i++) {
                // const enemy = DataManager.Instance.enemies[i];
                const enemy = item.enemies[i];
                DataManager.Instance.enemies[i].x = enemy.x;
                DataManager.Instance.enemies[i].y = enemy.y;
                DataManager.Instance.enemies[i].type = enemy.type;
                DataManager.Instance.enemies[i].direction = enemy.direction;
                DataManager.Instance.enemies[i].state = enemy.state;
            }

            for (let i = 0; i < DataManager.Instance.bursts.length; i++) {
                const burst = item.bursts[i];
                DataManager.Instance.bursts[i].x = burst.x;
                DataManager.Instance.bursts[i].y = burst.y;
                DataManager.Instance.bursts[i].type = burst.type;
                DataManager.Instance.bursts[i].state = burst.state;
            }

            for (let i = 0; i < DataManager.Instance.spikes.length; i++) {
                const one = item.spikes[i];
                DataManager.Instance.spikes[i].x = one.x;
                DataManager.Instance.spikes[i].y = one.y;
                DataManager.Instance.spikes[i].type = one.type;
                DataManager.Instance.spikes[i].count = one.count;
            }
        }
    }

}

