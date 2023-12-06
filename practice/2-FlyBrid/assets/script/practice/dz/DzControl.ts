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
        //动作
        let action = cc.moveTo(2, 200, 200);
        // action = cc.moveBy(2, 200, 200);
        // action = cc.scaleTo(2, 1.5, 0.5);
        //跳跃
        action = cc.jumpBy(2, 200, 0, 100, 3);
        action = cc.blink(3, 5);
        action = cc.fadeOut(3);
        //渐变
        action = cc.fadeTo(3, 100);
        //改变颜色
        action = cc.tintTo(3, 100, 30, 100);
        this.node.runAction(action);
        //停止动作
        // this.node.stopAction(action);
        // this.node.stopAllActions();
        // action.setTag(33);
        // this.node.stopActionByTag(33);
        // this.node.pauseAllActions();
    }

    update (dt) {

    }
}
