import { _decorator, Component, Node, Graphics, view, Color, game } from 'cc';
import EventManager from "db://assets/Runtime/EventManager";
import {CONTROLLER_ENUM, EVENT_ENUM} from "db://assets/Enums";
const { ccclass, property } = _decorator;

//当前屏幕宽度
const SCREEN_WIDTH = view.getVisibleSize().width;
const SCREEN_HEIGHT = view.getVisibleSize().height;

const enum FADE_STATE_ENUM{
    IDLE = 'IDLE',
    FADE_IN = 'FADE_IN',
    FADE_OUT = 'FADE_OUT',
}

export const DEFAULT_DURATION = 2000;

//疑问
@ccclass('DrawManager')
export class DrawManager extends Component {
    private ctx: Graphics;
    private state: FADE_STATE_ENUM = FADE_STATE_ENUM.IDLE;
    private oldTime: number = 0;
    private duration: number = 0;
    private fadeResolve: (value: PromiseLike<null>)=> void;

    init(){
        this.ctx = this.getComponent(Graphics);
        this.setAlpha(1);
    }

    setAlpha(percent: number){
        this.ctx.clear();
        this.ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.ctx.fillColor = new Color(0, 0, 0, 255 * percent);
        this.ctx.fill();
    }

    fadeIn(duration: number = DEFAULT_DURATION){
        this.setAlpha(0);
        this.duration = duration;
        this.oldTime = game.totalTime;
        this.state = FADE_STATE_ENUM.FADE_IN;
        return new Promise((resolve => {
            this.fadeResolve = resolve;
        }));
    }

    fadeOut(duration: number = DEFAULT_DURATION){
        this.setAlpha(1);
        this.duration = duration;
        this.oldTime = game.totalTime;
        this.state = FADE_STATE_ENUM.FADE_OUT;
        return new Promise((resolve => {
            this.fadeResolve = resolve;
        }));
    }

    update(){
        const percent = (game.totalTime - this.oldTime) / this.duration;
        switch (this.state){
            case FADE_STATE_ENUM.FADE_IN:
                if(percent < 1){
                    this.setAlpha(percent);
                }else {
                    this.setAlpha(1);
                    this.state = FADE_STATE_ENUM.IDLE;
                }
                break;
            case FADE_STATE_ENUM.FADE_OUT:
                if(percent < 1){
                    this.setAlpha(1 - percent);
                }else {
                    this.setAlpha(0);
                    this.state = FADE_STATE_ENUM.IDLE;
                }
                break;
            default:
        }
    }
}

