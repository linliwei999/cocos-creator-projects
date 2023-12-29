import Singleton from "db://assets/Base/Singleton";
import {DEFAULT_DURATION, DrawManager} from "db://assets/Scripts/UI/DrawManager";
import { RenderRoot2D, game } from "cc";
import {createUINode} from "db://assets/Utils";

export default class FadeManager extends Singleton{
    static get Instance(){
        return super.GetInstance<FadeManager>()
    }
    private _fader: DrawManager = null;

    get fader(){
        if(this._fader){
            return this._fader;
        }

        const root = createUINode();
        root.addComponent(RenderRoot2D);

        const fadeNode = createUINode();
        fadeNode.setParent(root);
        this._fader = fadeNode.addComponent(DrawManager);
        this._fader.init();
        //常驻组件
        game.addPersistRootNode(root);
        return this._fader;
    }

    fadeIn(duration: number = DEFAULT_DURATION){
        return this.fader.fadeIn(duration);
    }

    fadeOut(duration: number = DEFAULT_DURATION){
        return this.fader.fadeOut(duration);
    }

    mask(){
        return this.fader.mask();
    }
}
