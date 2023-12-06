// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    // 子弹预设体
    @property(cc.Prefab)
    bulletPre: cc.Prefab = null;

    start () {
        //移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event)=>{
            this.node.setPosition(event.getLocation());
        });
        //攻击
        //计时器
        this.schedule(()=> {
            //创建子弹
            let bullet = cc.instantiate(this.bulletPre);
            //设置父物体
            bullet.setParent(cc.director.getScene());
            bullet.x = this.node.x;
            bullet.y = this.node.y + 60;
        }, 0.5);
        //开启碰撞检测功能
        cc.director.getCollisionManager().enabled = true;
    }

    update (dt) {
   
    }

    onCollisionEnter(ohter){
        //玩家与敌机碰撞 
        if(ohter.tag == 1){
            cc.loader.loadRes("hero1_die", cc.SpriteFrame, (err, res)=> {
                //替换图片资源
                this.node.getComponent(cc.Sprite).spriteFrame = res;
            });
        }
        
    }
}
