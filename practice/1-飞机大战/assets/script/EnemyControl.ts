// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {

    }

    update (dt) {

    }

    //死亡
    die(){
        //加载爆炸图片
        cc.loader.loadRes("enemy0_die", cc.SpriteFrame, (err, res)=> {
            this.node.getComponent(cc.Sprite).spriteFrame = res;
        });
        //300毫秒后销毁
        setTimeout(()=> {
            this.node.destroy();
        }, 300);
    }
}
