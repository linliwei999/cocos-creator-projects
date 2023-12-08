import FSMState from "./FSMState";

const {ccclass, property} = cc._decorator;

export default class FSMManager {
    //状态列表
    StateList: FSMState[] = [];
    //当前状态ID
    CurrentIndex: number = -1;

    //改变状态
    ChangeState(StateId: number){
        //改变状态ID
        this.CurrentIndex = StateId;
        //调用新状态的center方法
        this.StateList[this.CurrentIndex].OnEnter();

    }

    //更新调用
    OnUpdate(){
        if(this.CurrentIndex != -1){
            //调用当前状态的update方法
            this.StateList[this.CurrentIndex].OnUpdate();
        }
    }

}
