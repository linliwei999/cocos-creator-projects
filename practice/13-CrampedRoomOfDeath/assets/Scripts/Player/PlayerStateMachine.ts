import {_decorator, Animation, AnimationClip, Component, SpriteFrame} from 'cc';
import {FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import State from "db://assets/Base/State";
import {getInitParamsNumber, getInitParamsTrigger, StateMachine} from "db://assets/Base/StateMachine";
import IdleSubStateMachine from "db://assets/Scripts/Player/IdleSubStateMachine";
import TurnLeftSubStateMachine from "db://assets/Scripts/Player/TurnLeftSubStateMachine";

const { ccclass, property } = _decorator;

//自定义联合类型
type ParamsValueType = boolean | number;

@ccclass('PlayerStateMachine')
export class PlayerStateMachine extends StateMachine {

    restTrigger(){
        for(const [_, item] of this.params){
            if(item.type === FSM_PARAMS_TYPE_ENUM.TRIGGER){
                item.value = false;
            }
        }
    }

    async init(){
        this.animationComponent = this.addComponent(Animation);
        this.initParams();
        this.initStateMachine();
        this.initAnimationEvent();
        await Promise.all(this.waitingList);
    }

    initParams(){
        this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.TURNLEFT, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
    }

    initStateMachine(){
        //注册子状态机
        this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachines.set(PARAMS_NAME_ENUM.TURNLEFT, new TurnLeftSubStateMachine(this));
        // this.stateMachines.set(PARAMS_NAME_ENUM.TURNLEFT, new State(this, 'texture/player/turnleft/top'));
    }

    initAnimationEvent(){
        this.animationComponent.on(Animation.EventType.FINISHED, ()=> {
            const name = this.animationComponent.defaultClip.name;
            const whiteList = ['turn'];
            if(whiteList.some(v=> name.includes(v))){
                this.setParams(PARAMS_NAME_ENUM.IDLE, true);
            }
        });
    }

    run(){
        switch (this.currentState){
            case this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT):
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
                if(this.params.get(PARAMS_NAME_ENUM.TURNLEFT).value){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.TURNLEFT);
                    }else if(this.params.get(PARAMS_NAME_ENUM.IDLE).value){
                        this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
                    }else{
                        this.currentState = this.currentState;
                    }
                break;
            default:
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        }
    }
}

