// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MapControl extends cc.Component {
    map: cc.TiledMap;
    player: cc.Node = null;

    start () {
        //获取地图信息 
        this.map = this.getComponent(cc.TiledMap);
        //获取普通层
        //this.map.getLayer('图层名称');
        //获取对象层 
        let palyerLayer = this.map.getObjectGroup('player');
        //获取某个对象
        let playerObj = palyerLayer.getObject("startPosition");
        //判断是否是玩家对象
        if(playerObj.isPlayer){
            //加载玩家预设体
            cc.loader.loadRes('player', cc.Prefab, (res, palyerPre) =>{
                //创建玩家
                this.player = cc.instantiate(palyerPre);
                this.player.setParent(this.node.children[2].children[0]);
                this.player.x = playerObj.x;
                this.player.y = playerObj.y;
            });
        }
    }

    update (dt) {
        //摄像头跟随玩家
        if(this.player){
            cc.Camera.main.node.x = this.player.x - 240;
            cc.Camera.main.node.y = this.player.y - 160;
        }
    }
}
