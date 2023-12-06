// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManger extends cc.Component {
    //敌机预设体
    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;

    @property(cc.Label)
    label: cc.Label = null;

    start () {
        //每隔两秒创建一个敌机
        this.schedule(()=> {
            //创建敌机
            let enemy = cc.instantiate(this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y = this.node.y;
            enemy.x = Math.random() * 400;
        }, 1);
    }

    update (dt) {

    }
}
