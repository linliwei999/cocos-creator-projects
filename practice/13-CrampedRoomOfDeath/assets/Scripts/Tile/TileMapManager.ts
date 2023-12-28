import { _decorator, Component, Node, Sprite, resources, SpriteFrame, UITransform, Layers } from 'cc';
const { ccclass, property } = _decorator;
import Levels from "db://assets/Levels";
import {TileManager} from "db://assets/Scripts/Tile/TileManager";
import {createUINode, randomByRange} from "db://assets/Utils";
import DataManager from "db://assets/Runtime/DataManager";
import ResourceManager from "db://assets/Runtime/ResourceManager";

@ccclass('TileMapManager')
export class TileMapManager extends Component {
    async init () {
        const spriteFrames = await ResourceManager.Instance.loadDir("texture/tile/tile");
        // console.log('地图信息：', level );
        // console.log(spriteFrames);
        const { mapInfo } = DataManager.Instance;
        DataManager.Instance.tileInfo = [];
        for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];
            DataManager.Instance.tileInfo[i] = [];
            for (let j = 0; j < column.length; j++) {
                const item = column[j];
                if(item.src === null || item.type === null){
                    continue
                }
                const node = createUINode();
                let number = item.src;
                if((number === 1 || number === 5 || number === 9) && (i%2 === 0) && (j%2 === 0)){
                    number += randomByRange(0, 4);
                }
                const imgSrc = `tile (${number})`;
                const spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
                const tileManager = node.addComponent(TileManager);
                const type = item.type;
                tileManager.init(type, spriteFrame, i, j);
                DataManager.Instance.tileInfo[i][j] = tileManager;
                node.setParent(this.node);
            }
        }
    }

    // loadRes () {
    //     return new Promise<SpriteFrame[]>((resolve, reject) => {
    //         // 加载 test assets 目录下所有 SpriteFrame，并且获取它们的路径
    //         resources.loadDir("texture/tile/tile", SpriteFrame, function (err, assets) {
    //             if(err){
    //                 reject(err);
    //                 return
    //             }
    //             resolve(assets);
    //         });
    //     });
    //
    // }
}

