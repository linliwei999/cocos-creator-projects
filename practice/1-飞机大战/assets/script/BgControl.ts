// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    start () {

    }

    update (dt) {
        // 背景移动
        // 遍历子物体(背景)
        for(let bgNode of this.node.children){
            // 移动 帧 -> 秒
            bgNode.y -= 50 * dt;
            if(bgNode.y < -850){
                bgNode.y += 852 * 2;
            }
        }
    }
}
