// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    //生命值
    hp: number = 1;
    //飞翔目标位置 +-110, 185
    targetPosition: cc.Vec2 = null;
    //速度
    speed: number = 50；

    start () {
       this.fly();

    }

    fly(){
        //生成随机目标点
        this.targetPosition = cc.v2(Math.random() * 220 - 110, 185);
        //翻转精灵
        if(this.targetPosition.x > this.node.x){
            this.node.scaleX = -1;
        }
        //移动
        //速度 * 时间 = 距离
        let move = cc.moveTo((this.targetPosition.y - this.node.y) / this.speed, this.targetPosition);
        this.node.runAction(move);
    }

    update (dt) {

    }
}
