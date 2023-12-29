import { _decorator, Component, Node, director } from 'cc';
import FadeManager from "db://assets/Runtime/FadeManager";
import {SCENE_ENUM} from "db://assets/Enums";

const { ccclass, property } = _decorator;

@ccclass('StartManager')
export class StartManager extends Component {
    onLoad(){
        director.preloadScene(SCENE_ENUM.Battle);
        FadeManager.Instance.fader.fadeOut(1000);
        // this.node.on(Node.EventType.TOUCH_START, this.handleStart, this);
        this.node.once(Node.EventType.TOUCH_START, this.handleStart, this);
    }

    async handleStart(){
       await FadeManager.Instance.fader.fadeIn(300);
       director.loadScene(SCENE_ENUM.Battle);
    }

}

