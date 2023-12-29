import {_decorator, Component, Node} from 'cc';
import {TileMapManager} from "db://assets/Scripts/Tile/TileMapManager";
import {createUINode} from "db://assets/Utils";
import Levels, {ILevel} from "db://assets/Levels";
import DataManager from "db://assets/Runtime/DataManager";
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import EventManager from "db://assets/Runtime/EventManager";
import {DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM} from "db://assets/Enums";
import {PlayerManager} from "db://assets/Scripts/Player/PlayerManager";
import {WoodenSkeletonManager} from "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonManager";
import {IronSkeletonManager} from "db://assets/Scripts/IronSkeleton/IronSkeletonManager";
import {DoorManager} from "db://assets/Scripts/Door/DoorManager";
import {BurstManager} from "db://assets/Scripts/Burst/BurstManager";
import {SpikesManager} from "db://assets/Scripts/Spikes/SpikesManager";

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

    onLoad(){
        DataManager.Instance.levelIndex = 1;
        EventManager.Instance.on(EVENT_ENUM.NEXT_LEVEL, this.nextLevel, this);
    }

    onDestroy(){
        EventManager.Instance.off(EVENT_ENUM.NEXT_LEVEL, this.nextLevel);
    }

    start () {
        this.generateStage();
        this.initLevel();
    }

    initLevel(){
        const level = Levels[`level${DataManager.Instance.levelIndex}`];
        if(level){
            this.clearLevel();
            this.level = level;
            //把地图数据存到数据中心(单例)
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            this.generateTileMap();
            // this.generateDoor();
            // this.generatePlayer();
            // this.generateEnemies();
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
    }

    //生成地图
    async generateTileMap(){
        const tileMap = createUINode();
        tileMap.setParent(this.stage);
        const tileManager = tileMap.addComponent(TileMapManager);
        await tileManager.init();
        this.adaptPos();
        this.generateBursts();
        this.generateSpikes();
        this.generateDoor();
        this.generateEnemies();
        this.generatePlayer();
    }

    //生成玩家
    async generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playerManager = player.addComponent(PlayerManager);
        // await playerManager.init({
        //     x: 2,
        //     y: 8,
        //     type: ENTITY_TYPE_ENUM.PLAYER,
        //     direction: DIRECTION_ENUM.TOP,
        //     state: ENTITY_STATE_ENUM.IDLE
        // });
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

    //瓦片地图适配屏幕
    adaptPos () {
        const { mapRowCount, mapColumnCount } = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount / 2;
        const disY = TILE_HEIGHT * mapColumnCount / 2 + 80;
        this.stage.setPosition(-disX, disY);
    }
}

