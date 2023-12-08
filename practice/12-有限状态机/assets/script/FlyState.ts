import FSMState from "./FSMState";

const {ccclass, property} = cc._decorator;

export default class FlyState extends FSMState {
    //进入状态
    OnEnter(){
        super.OnEnter();
        this.component.getComponent(cc.Animation).play("fly");
    }

    //状态更新中
    OnUpdate(){
        super.OnUpdate();

    }
}
