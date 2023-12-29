import {_decorator, Animation, AnimationClip, Component, SpriteFrame} from 'cc';
import {ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import {getInitParamsNumber, getInitParamsTrigger, StateMachine} from "db://assets/Base/StateMachine";
import IdleSubStateMachine from "db://assets/Scripts/Door/IdleSubStateMachine";
import DeathSubStateMachine from "db://assets/Scripts/Door/DeathSubStateMachine";

const { ccclass, property } = _decorator;

@ccclass('DoorStateMachine')
export class DoorStateMachine extends StateMachine {

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
        await Promise.all(this.waitingList);
    }

    initParams(){
        //注册参数
        this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
    }

    initStateMachine(){
        //注册子状态机
        this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachines.set(PARAMS_NAME_ENUM.DEATH, new DeathSubStateMachine(this));
    }

    run(){
        switch (this.currentState){
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.DEATH):
              if(this.params.get(PARAMS_NAME_ENUM.IDLE).value){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
                }else if(this.params.get(PARAMS_NAME_ENUM.DEATH).value){
                  this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.DEATH);
              }else{
                    this.currentState = this.currentState;
                }
                break;
            default:
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        }
    }
}

