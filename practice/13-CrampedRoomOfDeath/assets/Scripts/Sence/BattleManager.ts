import { _decorator, Component, Node } from 'cc';
import {TileMapManager} from "db://assets/Scripts/Tile/TileMapManager";
import {createUINode} from "db://assets/Utils";
import Levels, {ILevel} from "db://assets/Levels";
import DataManager from "db://assets/Runtime/DataManager";
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
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

    start () {
        this.generateStage();
        this.initLevel();
    }

    initLevel(){
        const level = Levels[`level${1}`];
        if(level){
            this.level = level;
            //把地图数据存到数据中心(单例)
            DataManager.Instance.mapInfo = this.level.mapInfo;
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0;
            DataManager.Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            this.generateTileMap();
        }
    }

    generateStage(){
        //创建舞台
        this.stage = createUINode();
        this.stage.setParent(this.node);
    }

    generateTileMap(){
        const tileMap = createUINode();
        tileMap.setParent(this.stage);
        const tileManager = tileMap.addComponent(TileMapManager);
        tileManager.init();

        this.adaptPos();
    }

    //瓦片地图适配屏幕
    adaptPos () {
        const { mapRowCount, mapColumnCount } = DataManager.Instance;
        const disX = TILE_WIDTH * mapRowCount / 2;
        const disY = TILE_HEIGHT * mapColumnCount / 2 + 80;
        this.stage.setPosition(-disX, disY);
    }
}

