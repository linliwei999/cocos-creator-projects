// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DzControl extends cc.Component {

    start () {
        // //延时动作
        // let action = cc.moveTo(2, 200, 200);
        // // action = cc.moveBy(2, 200, 200);
        // // action = cc.scaleTo(2, 1.5, 0.5);
        // //跳跃
        // action = cc.jumpBy(2, 200, 0, 100, 3);
        // action = cc.blink(3, 5);
        // action = cc.fadeOut(3);
        // //渐变
        // action = cc.fadeTo(3, 100);
        // //改变颜色
        // action = cc.tintTo(3, 100, 30, 100);
        // this.node.runAction(action);
        //停止动作
        // this.node.stopAction(action);
        // this.node.stopAllActions();
        // action.setTag(33);
        // this.node.stopActionByTag(33);
        // this.node.pauseAllActions();

        //瞬间动作
        let action = cc.show();
        action = cc.hide();
        //切换显示隐藏
        action = cc.toggleVisibility();
        //翻转
        action = cc.flipX(true);
        action = cc.flipY(true);
        action = cc.callFunc(()=> {});
        
        //队列/序列动作
        // action = cc.fadeOut(1);
        // let action2 = cc.fadeIn(1);
        // let seq = cc.sequence(action, action2);
        // // this.node.runAction(seq);    
        // let repeate = cc.repeat(seq, 3);
        // this.node.runAction(repeate);
        // let repeateForever = cc.repeatForever(seq);
        // this.node.runAction(repeateForever);
        // let seq = cc.sequence(action, action2, cc.callFunc(()=> {}));
        // let seq = cc.sequence(action, action2, cc.delayTime(1), cc.callFunc(()=> {}));

        //并列动作
        let move = cc.moveTo(3, 500, 500);
        let color = cc.tintTo(3, 100, 100, 2);
        let spawn = cc.spawn(move, color);
        this.node.runAction(spawn);


    }

    update (dt) {

    }
}
