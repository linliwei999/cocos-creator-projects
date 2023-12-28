import {_decorator, Animation, AnimationClip, Component, SpriteFrame} from 'cc';
import {ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import {getInitParamsNumber, getInitParamsTrigger, StateMachine} from "db://assets/Base/StateMachine";
import IdleSubStateMachine from "db://assets/Scripts/WoodenSkeleton/IdleSubStateMachine";
import AttackSubStateMachine from "db://assets/Scripts/WoodenSkeleton/AttackSubStateMachine";
import {EntityManager} from "db://assets/Base/EntityManager";

const { ccclass, property } = _decorator;

//自定义联合类型
type ParamsValueType = boolean | number;

@ccclass('WoodenSkeletonStateMachine')
export class WoodenSkeletonStateMachine extends StateMachine {

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
        //注册参数
        this.params.set(PARAMS_NAME_ENUM.IDLE, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.ATTACK, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
    }

    initStateMachine(){
        //注册子状态机
        this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubStateMachine(this));
        this.stateMachines.set(PARAMS_NAME_ENUM.ATTACK, new AttackSubStateMachine(this));
    }

    initAnimationEvent(){
        this.animationComponent.on(Animation.EventType.FINISHED, ()=> {
            const name = this.animationComponent.defaultClip.name;
            const whiteList = ['attack'];
            if(whiteList.some(v=> name.includes(v))){
                this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
            }
        });
    }

    run(){
        switch (this.currentState){
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK):
              if(this.params.get(PARAMS_NAME_ENUM.IDLE).value){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
                }else if(this.params.get(PARAMS_NAME_ENUM.ATTACK).value){
                  this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK);
              }else{
                    this.currentState = this.currentState;
                }
                break;
            default:
                this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        }
    }
}

