import { _decorator, Component, Node } from 'cc';
import {TileMapManager} from "db://assets/Scripts/Tile/TileMapManager";
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        this.generateTileMap();
    }

    generateTileMap(){
        //创建舞台
        const stage = new Node();
        stage.setParent(this.node);
        const tileMap = new Node();
        tileMap.setParent(stage);
        const tileManager = tileMap.addComponent(TileMapManager);
        tileManager.init();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

