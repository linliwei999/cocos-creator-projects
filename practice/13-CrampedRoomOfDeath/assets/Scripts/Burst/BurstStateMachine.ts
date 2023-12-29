import {_decorator, Animation, AnimationClip, Component, SpriteFrame} from 'cc';
import {ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import {getInitParamsNumber, getInitParamsTrigger, StateMachine} from "db://assets/Base/StateMachine";
import IdleSubStateMachine from "db://assets/Scripts/WoodenSkeleton/IdleSubStateMachine";
import AttackSubStateMachine from "db://assets/Scripts/WoodenSkeleton/AttackSubStateMachine";
import {EntityManager} from "db://assets/Base/EntityManager";
import DeathSubStateMachine from "db://assets/Scripts/WoodenSkeleton/DeathSubStateMachine";
import State from "db://assets/Base/State";

const { ccclass, property } = _decorator;

const BASE_URL = 'texture/burst';

@ccclass('BurstStateMachine')
export class BurstStateMachine extends StateMachine {

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
        this.params.set(PARAMS_NAME_ENUM.DEATH, getInitParamsTrigger());
        this.params.set(PARAMS_NAME_ENUM.DIRECTION, getInitParamsNumber());
    }

    initStateMachine(){
        //注册子状态机
        this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new State(this, `${BASE_URL}/idle`));
        this.stateMachines.set(PARAMS_NAME_ENUM.ATTACK, new State(this, `${BASE_URL}/attack`));
        this.stateMachines.set(PARAMS_NAME_ENUM.DEATH, new State(this, `${BASE_URL}/death`));
    }

    initAnimationEvent(){
        // this.animationComponent.on(Animation.EventType.FINISHED, ()=> {
        //     const name = this.animationComponent.defaultClip.name;
        //     const whiteList = ['attack'];
        //     if(whiteList.some(v=> name.includes(v))){
        //         this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
        //     }
        // });
    }

    run(){
        switch (this.currentState){
            case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
            case this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK):
            case this.stateMachines.get(PARAMS_NAME_ENUM.DEATH):
              if(this.params.get(PARAMS_NAME_ENUM.IDLE).value){
                    this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
                }else if(this.params.get(PARAMS_NAME_ENUM.ATTACK).value){
                  this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.ATTACK);
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

