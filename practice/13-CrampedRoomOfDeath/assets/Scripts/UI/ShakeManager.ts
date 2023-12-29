import { _decorator, Component, BlockInputEvents, Graphics, view, Color, game, UITransform } from 'cc';
import EventManager from "db://assets/Runtime/EventManager";
import {CONTROLLER_ENUM, EVENT_ENUM, SHAKE_TYPE_ENUM} from "db://assets/Enums";
const { ccclass, property } = _decorator;

//当前屏幕宽度
const SCREEN_WIDTH = view.getVisibleSize().width;
const SCREEN_HEIGHT = view.getVisibleSize().height;

const enum FADE_STATE_ENUM{
    IDLE = 'IDLE',
    FADE_IN = 'FADE_IN',
    FADE_OUT = 'FADE_OUT',
}

export const DEFAULT_DURATION = 500;

@ccclass('ShakeManager')
export class ShakeManager extends Component {
    private isShaking: boolean = false;
    private type: SHAKE_TYPE_ENUM;
    private oldTime: number = 0;
    private oldPos: { x: number, y: number } = { x:0, y: 0 };

    onLoad(){
        EventManager.Instance.on(EVENT_ENUM.SCREEN_SHAKE, this.onShake, this);
    }

    onDestroy(){
        EventManager.Instance.off(EVENT_ENUM.SCREEN_SHAKE, this.onShake);
    }

    onShake(type: SHAKE_TYPE_ENUM){
        if(this.isShaking) return;
        this.type = type;
        this.oldTime = game.totalTime;
        this.isShaking = true;
        this.oldPos.x = this.node.position.x;
        this.oldPos.y = this.node.position.y;
    }

    stop(){
        this.isShaking = false;
    }

    update(){
        if(this.isShaking){
            const duration = 200;
            const amount = 6;
            const frequency = 12;
            const currentSecond = (game.totalTime - this.oldTime) / 1000;
            const totalSecond = duration / 1000;
            const offset = amount * Math.sin(frequency * Math.PI * currentSecond);

            if(this.type === SHAKE_TYPE_ENUM.TOP){
                this.node.setPosition(this.oldPos.x, this.oldPos.y - offset);
            }else if(this.type === SHAKE_TYPE_ENUM.BOTTOM){
                this.node.setPosition(this.oldPos.x, this.oldPos.y + offset);
            }else if(this.type === SHAKE_TYPE_ENUM.LEFT){
                this.node.setPosition(this.oldPos.x - offset, this.oldPos.y);
            }else if(this.type === SHAKE_TYPE_ENUM.RIGHT){
                this.node.setPosition(this.oldPos.x + offset, this.oldPos.y);
            }

            //震动结束
            if(currentSecond > totalSecond){
                this.isShaking = false;
                this.node.setPosition(this.oldPos.x, this.oldPos.y);
            }
        }
    }
}

