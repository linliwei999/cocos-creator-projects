import { _decorator, Component, Node, Sprite, resources, SpriteFrame, UITransform, Layers } from 'cc';
const { ccclass, property } = _decorator;
import Levels from "db://assets/Levels";
import {TileManager} from "db://assets/Scripts/Tile/TileManager";
import {createUINode} from "db://assets/Utils";
import DataManager from "db://assets/Runtime/DataManager";
import ResourceManager from "db://assets/Runtime/ResourceManager";

@ccclass('TileMapManager')
export class TileMapManager extends Component {
    async init () {
        const spriteFrames = await ResourceManager.Instance.loadDir("texture/tile/tile");
        // console.log('地图信息：', level );
        // console.log(spriteFrames);
        const { mapInfo } = DataManager.Instance;
        for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];
            for (let j = 0; j < column.length; j++) {
                const item = column[j];
                if(item.src === null || item.type === null){
                    continue
                }
                const node = createUINode();
                const imgSrc = `tile (${item.src})`;
                const spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
                const tileManager = node.addComponent(TileManager);
                tileManager.init(spriteFrame, i, j);
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

