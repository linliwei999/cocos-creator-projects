import {SubStateMachine} from "db://assets/Base/SubStateMachine";
import {StateMachine} from "db://assets/Base/StateMachine";
import {DIRECTION_ENUM, DIRECTION_ODER_ENUM, PARAMS_NAME_ENUM} from "db://assets/Enums";
import State from "db://assets/Base/State";
import { AnimationClip } from "cc";

const BASE_URL = 'texture/player/turnleft';

export default class TurnLeftSubStateMachine extends SubStateMachine{
    constructor(fsm: StateMachine) {
        super(fsm);
        this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}/top`));
        this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}/bottom`));
        this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`));
        this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`));
    }

    run(){
        const value = this.fsm.getParams(PARAMS_NAME_ENUM.DIRECTION);
        this.currentState = this.stateMachines.get(DIRECTION_ODER_ENUM[value as number]);
    }
}