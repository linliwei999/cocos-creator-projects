import FSMManager from "./FSMManager";
import FlyState from "./FlyState";
import DieState from "./DieState";

const {ccclass, property} = cc._decorator;

enum BirdState{
    Fly,
    Die,

}

@ccclass
export default class BirdControl extends cc.Component {
    //状态机
    fsmManager: FSMManager;

    start () {
        this.fsmManager = new FSMManager();
        //创建两个状态
        let fly = new FlyState(BirdState.Fly, this, this.fsmManager);
        let die = new DieState(BirdState.Die, this, this.fsmManager);
        this.fsmManager.StateList = [fly, die];
        //开始执行状态
        this.fsmManager.ChangeState(BirdState.Fly);
    }

    update(dt){
        if(this.fsmManager.CurrentIndex != -1){
            this.fsmManager.OnUpdate();
        }
    }

    fly(){
        this.fsmManager.ChangeState(BirdState.Fly);
    }

    die(){
        this.fsmManager.ChangeState(BirdState.Die);
    }

    // update (dt) {}
}
