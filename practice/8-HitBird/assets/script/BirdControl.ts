const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {
    //生命值
    hp: number = 1;
    //飞翔目标位置 +-110, 185
    targetPosition: cc.Vec2 = null;
    //速度
    speed: number = 50;
    //游戏结束回调
    dieCallBack: Function;
    //加分回调
    addSoreCallBack: Function;

    start () {
    //    this.fly();
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
        let seq = cc.sequence(move, cc.callFunc(()=> {
            //结束回调
            //如果飞出屏幕游戏结束
            this.dieCallBack && this.dieCallBack();
        }));
        this.node.runAction(seq);

        //如果触摸到
        this.node.on(cc.Node.EventType.TOUCH_START, (event)=> {
            //如果还活着
            if(this.hp > 0){
                //血量减少
                this.hp--;
                //听着飞翔动作
                this.node.stopAllActions();
                //向下掉落
                this.getComponent(cc.Animation).play("die");
                let moveDie = cc.moveTo(this.node.y / (this.speed * 2), cc.v2(this.node.x, 0));
                this.node.runAction(cc.sequence(moveDie, cc.callFunc(()=>{
                    // 销毁自身
                    this.node.destroy();
                }))); 
                //加分
                this.addSoreCallBack && this.addSoreCallBack();
            }   
        });

    }

    update (dt) {

    }
}
