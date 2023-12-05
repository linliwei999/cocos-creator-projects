// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EnemyControl from "./EnemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {
    @property
    speed: number = 800;

    start () { 

    }

    update (dt) {
        // 移动
        this.node.y += this.speed * dt;
        // 出屏销毁子弹
        if(this.node.y > 820){
            this.node.destroy();
        }
    }

    onCollisionEnter(other){
        //如果碰到敌人，销毁自己，让敌人死亡
        if(other.tag == 1){
            //销毁敌人
            other.getComponent(EnemyControl).die();

            //销毁自己
            this.node.destroy();
        }
    }

}
