import { _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, SpriteFrame } from 'cc';
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import ResourceManager from "db://assets/Runtime/ResourceManager";
const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('PlayerManager')
export class PlayerManager extends Component {
    async init(){
        const sprite = this.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;

        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

        const spriteFrames = await ResourceManager.Instance.loadDir('texture/player/idle/top');
        const animationComponent = this.addComponent(Animation);
        const animationClip = new AnimationClip();

        const track = new animation.ObjectTrack(); // 创建一个对象轨道
        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径
        const frames:Array<[number, SpriteFrame]> = spriteFrames.map((item, index)=> [ANIMATION_SPEED * index, item]);
        // 为 x 通道的曲线添加关键帧
        track.channel.curve.assignSorted(frames);
        // 最后将轨道添加到动画剪辑以应用
        animationClip.addTrack(track);
        animationClip.duration = frames.length * ANIMATION_SPEED; // 整个动画剪辑的周期
        animationClip.wrapMode = AnimationClip.WrapMode.Loop;
        animationComponent.defaultClip = animationClip;
        animationComponent.play();
    }
}

