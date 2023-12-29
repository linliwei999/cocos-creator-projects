import {_decorator, Animation, AnimationClip, Component, SpriteFrame} from 'cc';
import {
    ENTITY_STATE_ENUM,
    ENTITY_TYPE_ENUM,
    FSM_PARAMS_TYPE_ENUM,
    PARAMS_NAME_ENUM,
    SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM
} from "db://assets/Enums";
import {getInitParamsNumber, getInitParamsTrigger, StateMachine} from "db://assets/Base/StateMachine";
import SpikesOneSubStateMachine from "db://assets/Scripts/Spikes/SpikesOneSubStateMachine";

const { ccclass, property } = _decorator;

//自定义联合类型
type ParamsValueType = boolean | number;

@ccclass('SpikesStateMachine')
export class SpikesStateMachine extends StateMachine {

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
        this.params.set(PARAMS_NAME_ENUM.SPIKES_CURRENT_COUNT, getInitParamsNumber());
        this.params.set(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT, getInitParamsNumber());
    }

    initStateMachine(){
        this.stateMachines.set(ENTITY_TYPE_ENUM.SPIKES_ONE, new SpikesOneSubStateMachine(this));
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
        const totalCount = this.getParams(PARAMS_NAME_ENUM.SPIKES_TOTAL_COUNT);
        switch (this.currentState){
            case this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE):
                if(totalCount === SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_ONE){
                    this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE);
                }
                break;
            default:
                this.currentState = this.stateMachines.get(ENTITY_TYPE_ENUM.SPIKES_ONE);
        }
    }
}

