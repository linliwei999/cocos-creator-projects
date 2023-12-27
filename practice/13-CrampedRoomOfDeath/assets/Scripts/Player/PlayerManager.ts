import {_decorator, Animation, animation, AnimationClip, Component, Sprite, SpriteFrame, UITransform} from 'cc';
import {TILE_HEIGHT, TILE_WIDTH} from "db://assets/Scripts/Tile/TileManager";
import ResourceManager from "db://assets/Runtime/ResourceManager";
import {CONTROLLER_ENUM, EVENT_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import EventManager from "db://assets/Runtime/EventManager";
import {PlayerStateMachine} from "db://assets/Scripts/Player/PlayerStateMachine";

const { ccclass, property } = _decorator;

const ANIMATION_SPEED = 1/8;

@ccclass('PlayerManager')
export class PlayerManager extends Component {
    x:number = 0
    y:number = 0
    targetX:number = 0
    targetY:number = 0
    // private readonly speed = 1/10
    private readonly speed = ANIMATION_SPEED
    fsm: PlayerStateMachine

    async init(){
        const sprite = this.addComponent(Sprite);
        sprite.sizeMode = Sprite.SizeMode.CUSTOM;
        const transform = this.getComponent(UITransform);
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);

        this.fsm = this.node.addComponent(PlayerStateMachine);
        await this.fsm.init();
        this.fsm.setParams(PARAMS_NAME_ENUM.IDLE, true);
        // await this.render();
        EventManager.Instance.on(EVENT_ENUM.PLAYER_CTRL, this.move, this);
    }

    // async render(){
    //     const sprite = this.addComponent(Sprite);
    //     sprite.sizeMode = Sprite.SizeMode.CUSTOM;
    //
    //     const transform = this.getComponent(UITransform);
    //     transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4);
    //
    //     const spriteFrames = await ResourceManager.Instance.loadDir('texture/player/idle/top');
    //     const animationComponent = this.addComponent(Animation);
    //     const animationClip = new AnimationClip();
    //
    //     const track = new animation.ObjectTrack(); // 创建一个对象轨道
    //     track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径
    //     const frames:Array<[number, SpriteFrame]> = spriteFrames.map((item, index)=> [ANIMATION_SPEED * index, item]);
    //     // 为 x 通道的曲线添加关键帧
    //     track.channel.curve.assignSorted(frames);
    //     // 最后将轨道添加到动画剪辑以应用
    //     animationClip.addTrack(track);
    //     animationClip.duration = frames.length * ANIMATION_SPEED; // 整个动画剪辑的周期
    //     animationClip.wrapMode = AnimationClip.WrapMode.Loop;
    //     animationComponent.defaultClip = animationClip;
    //     animationComponent.play();
    // }

    updateXY(){
        if(this.targetX < this.x){
            this.x -= this.speed
        }else if(this.targetX > this.x){
            this.x += this.speed
        }

        if(this.targetY < this.y){
            this.y -= this.speed
        }else if(this.targetY > this.y){
            this.y += this.speed
        }

        if(Math.abs(this.targetX - this.x) < -0.1 && Math.abs(this.targetY - this.y) < -0.1){
            this.x = this.targetX;
            this.y = this.targetY;
        }
    }

    //玩家移动
    move(inputDirection: CONTROLLER_ENUM){
        if (inputDirection === CONTROLLER_ENUM.TOP){
            this.targetY -=1
        }else if(inputDirection === CONTROLLER_ENUM.BOTTOM){
            this.targetY +=1
        }else if(inputDirection === CONTROLLER_ENUM.LEFT){
            this.targetX -=1
        }else if(inputDirection === CONTROLLER_ENUM.RIGHT){
            this.targetX +=1
        }else if(inputDirection === CONTROLLER_ENUM.TURNLEFT){
            this.fsm.setParams(PARAMS_NAME_ENUM.TURNLEFT, true);
        }
    }

    update(){
        this.updateXY();
        this.node.setPosition(this.x * TILE_WIDTH - 1.5 * TILE_WIDTH, -this.y * TILE_HEIGHT + 1.5 * TILE_HEIGHT);
    }
}

