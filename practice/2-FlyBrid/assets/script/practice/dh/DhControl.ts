// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class DhControl extends cc.Component {

    start () {
        let ani = this.getComponent(cc.Animation);
        //播放动画
        ani.play("run");

    }

    update (dt) {

    }
    
    custom(){
        console.log("cunstom被调用");
    }
}
