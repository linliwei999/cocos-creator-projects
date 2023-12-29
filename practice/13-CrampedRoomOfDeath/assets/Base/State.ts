/****
* 1.需要知道animationClip
* 2.需要具有播放动画能力
* */
import {AnimationClip, Sprite, animation, SpriteFrame } from "cc";
import ResourceManager from "db://assets/Runtime/ResourceManager";
import {StateMachine} from "db://assets/Base/StateMachine";
import {sortSpriteFrame} from "db://assets/Utils";

export const ANIMATION_SPEED = 1/8;

export default class State {
    constructor(
        private fsm: StateMachine,
        private path: string,
        private wrapMode: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal,
        private speed: number = ANIMATION_SPEED,
        private events: any[] = []
    ){
        this.init();
    }
    private animationClip: AnimationClip

    async init(){
        const promise = ResourceManager.Instance.loadDir(this.path);
        this.fsm.waitingList.push(promise);
        const spriteFrames = await promise;
        this.animationClip = new AnimationClip();

        const track = new animation.ObjectTrack(); // 创建一个对象轨道
        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径
        const frames:Array<[number, SpriteFrame]> = sortSpriteFrame(spriteFrames).map((item, index)=> [this.speed * index, item]);
        // 为 x 通道的曲线添加关键帧
        track.channel.curve.assignSorted(frames);
        // 最后将轨道添加到动画剪辑以应用
        this.animationClip.addTrack(track);
        this.animationClip.name = this.path;
        this.animationClip.duration = frames.length * this.speed; // 整个动画剪辑的周期
        this.animationClip.wrapMode = this.wrapMode;

        //绑定动画帧事件
        for (const event of this.events) {
            this.animationClip.events.push(event);
        }
        this.animationClip.updateEventDatas();
        
        // const animationComponent = this.node.getComponent(Animation);
        // if (animationComponent && animationComponent.defaultClip) {
        //     const { defaultClip } = animationComponent;
        //     defaultClip.events.push({
        //         frame: 0.5, // 第 0.5 秒时触发事件
        //         func: 'onTriggered', // 事件触发时调用的函数名称
        //         params: [ 0 ], // 向 `func` 传递的参数
        //     });
        //     defaultClip.updateEventDatas();
        // }
    }

    run(){
        if(this.fsm.animationComponent.defaultClip?.name === this.animationClip?.name){
            return;
        }
        this.fsm.animationComponent.defaultClip = this.animationClip;
        this.fsm.animationComponent.play();
    }
}