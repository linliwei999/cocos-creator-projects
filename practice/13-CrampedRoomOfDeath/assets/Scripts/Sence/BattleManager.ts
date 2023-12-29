import { _decorator, Component, Node } from 'cc';
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
        this.generateDoor();
        this.generateEnemies();
        this.generatePlayer();
    }

    //生成玩家
    async generatePlayer(){
        const player = createUINode();
        player.setParent(this.stage);
        const playerManager = player.addComponent(PlayerManager);
        await playerManager.init({
            x: 2,
            y: 8,
            type: ENTITY_TYPE_ENUM.PLAYER,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.player = playerManager;
        EventManager.Instance.emit(EVENT_ENUM.PLAYER_BORN, true);
    }

    //生成敌人
    async generateEnemies(){
        //生成木骷髅
        const enemy1 = createUINode();
        enemy1.setParent(this.stage);
        const woodenSkeletonManager = enemy1.addComponent(WoodenSkeletonManager);
        await woodenSkeletonManager.init({
            x: 7,
            y: 7,
            type: ENTITY_TYPE_ENUM.SKELETON_WOODEN,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.enemies.push(woodenSkeletonManager);

        //生成铁骷髅
        const enemy2 = createUINode();
        enemy2.setParent(this.stage);
        const ironSkeletonManager = enemy2.addComponent(IronSkeletonManager);
        await ironSkeletonManager.init({
            x: 8,
            y: 6,
            type: ENTITY_TYPE_ENUM.SKELETON_IRON,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.enemies.push(ironSkeletonManager);
    }

    //生成门
    async generateDoor(){
        const door = createUINode();
        door.setParent(this.stage);
        const doorManager = door.addComponent(DoorManager);
        await doorManager.init({
            x: 7,
            y: 8,
            type: ENTITY_TYPE_ENUM.DOOR,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.door = doorManager;
    }

    //地裂瓦片
    async generateBursts(){
        const burst = createUINode();
        burst.setParent(this.stage);
        const burstManager = burst.addComponent(BurstManager);
        await burstManager.init({
            x: 2,
            y: 6,
            type: ENTITY_TYPE_ENUM.BURST,
            direction: DIRECTION_ENUM.TOP,
            state: ENTITY_STATE_ENUM.IDLE
        });
        DataManager.Instance.bursts.push(burstManager);
    }

    //瓦片地图适配屏幕
    adaptPos () {
        const { mapRowCount, mapColumnCount } = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount / 2;
        const disY = TILE_HEIGHT * mapColumnCount / 2 + 80;
        this.stage.setPosition(-disX, disY);
    }
}

