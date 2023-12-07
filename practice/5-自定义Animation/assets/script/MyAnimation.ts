// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyAnimation extends cc.Component {
    //每秒播放速度
    @property
    speed: number = 0.1;

    //播放帧数组
    @property([cc.SpriteFrame])
    sprites: cc.SpriteFrame[] = []; 

    //是否播放动画
    @property
    isPlay: boolean = false;

    //当前播放帧
    index: number = 0;

    //计时器
    timer: number = 0;

    start () {

    }

    play(){
        this.isPlay = true;
    }

    stop(){
        this.isPlay = false;
    }

    update (dt) {
        if(this.isPlay){
            //播放动画
            //计时器累加
            this.timer += dt;
            if(this.timer > this.speed){
                this.timer = 0;
                //切换帧
                this.index++;
                if(this.index >= this.sprites.length){
                    this.index = 0;
                }
                //更换帧图片
                this.getComponent(cc.Sprite).spriteFrame = this.sprites[this.index];
            }

        }
    }
}
