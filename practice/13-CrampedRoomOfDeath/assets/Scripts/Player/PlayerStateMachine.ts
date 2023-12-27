import {_decorator, Component, AnimationClip, Animation, SpriteFrame} from 'cc';
import {FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import State from "db://assets/Base/State";

const { ccclass, property } = _decorator;

//自定义联合类型
type ParamsValueType = boolean | number;

export interface IParamsValue{
    type: FSM_PARAMS_TYPE_ENUM,
    value: ParamsValueType,
}

export const getInitParamsTrigger = () =>{
    return {
        type: FSM_PARAMS_TYPE_ENUM.TRIGGER,
        value: false,
    }
}

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends Component {
    private _currentState: State = null
    params:Map<string, IParamsValue> = new Map(); //参数列表
    stateMachines: Map<string, State> = new Map(); //状态机列表
    animationComponent: Animation
    waitingList: Array<Promise<SpriteFrame[]>> = []

    getParams(paramsName: string){
        if(this.params.has(paramsName)){
            return this.params.get(paramsName).value;
        }
    }

    setParams(paramsName: string, value: ParamsValueType){
        if(this.params.has(paramsName)){
            this.params.get(paramsName).value = value;
            this.run();
        }
    }

    get currentState(){
        return this._currentState;
    }

    set currentState(newState: State){
        this._currentState = newState;
        this._currentState.run();
    }

    async init(){
        this.animationComponent = this.addComponent(Animation);
        this.initParams();
        this.initStateMachine();
        await Promise.all(this.waitingList);
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParamsTrigger());
    }

    initStateMachine(){
        this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new State(this, 'texture/player/idle/top', AnimationClip.WrapMode.Loop));
        this.stateMachines.set(PARAMS_NAME_ENUM.TURNLEFT, new State(this, 'texture/player/turnleft/top'));
    }

    run(){
        switch (this.currentState){
            case this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
                if(this.params.get(PARAMS_NAME_ENUM.TURNLEFT)){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT);
                    }else if(this.params.get(PARAMS_NAME_ENUM.IDLE)){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
                }
                break;
            default:
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        }
    }
}

