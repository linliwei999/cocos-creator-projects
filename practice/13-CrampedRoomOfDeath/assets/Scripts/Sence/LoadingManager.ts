import { _decorator, Component, Node, director, resources, ProgressBar } from 'cc';
import FadeManager from "db://assets/Runtime/FadeManager";
import {SCENE_ENUM} from "db://assets/Enums";

const { ccclass, property } = _decorator;

@ccclass('LoadingManager')
export class LoadingManager extends Component {
    @property(ProgressBar)
    bar: ProgressBar = null

    onLoad(){
        resources.preloadDir("texture", (current, total)=>{
            this.bar.progress = current / total;
        }, async ()=>{
            //成功回调
            await FadeManager.Instance.fader.fadeIn(300);
            director.loadScene(SCENE_ENUM.Battle);
        });
    }
}

