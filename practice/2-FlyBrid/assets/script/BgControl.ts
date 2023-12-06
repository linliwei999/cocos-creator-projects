// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BridControl from "./BridControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    //速度
    @property
    speed: number = 4;
    //宽度
    @property
    width: number = 288;

    //小鸟
    @property(BridControl)
    brid: BridControl = null;

    start () {
        //添加背景音乐
        cc.loader.loadRes("游戏bgm", cc.AudioClip, (err, clip)=> {
            let audioId: number = cc.audioEngine.playMusic(clip, true);
            cc.audioEngine.setVolume(audioId, 0.1);
            cc.audioEngine.stop(audioId);
        });
        // 点击监听
        // this.node.on 
        for(let bg of this.node.children){
            bg.on(cc.Node.EventType.TOUCH_START, ()=>{
                this.brid.fly();
            });
        }
    }

    update (dt) {
        //移动
        for(let bg of this.node.children){
            bg.x -= this.speed * dt;
            if(bg.x < -this.width){
                bg.x += this.width *2 -10;
            }
        }
    }
}
