import {StateMachine} from "db://assets/Base/StateMachine";
import {
    DIRECTION_ENUM,
    DIRECTION_ODER_ENUM,
    PARAMS_NAME_ENUM,
    SPIKES_COUNT_ENUM,
    SPIKES_COUNT_MAP_NUMBER_ENUM
} from "db://assets/Enums";
import State from "db://assets/Base/State";
import DirectionSubStateMachine from "db://assets/Base/DirectionSubStateMachine";
import {SubStateMachine} from "db://assets/Base/SubStateMachine";

const BASE_URL = 'texture/spikes/spikesone';

export default class SpikesOneSubStateMachine extends SubStateMachine{
    constructor(fsm: StateMachine) {
        super(fsm);
        this.stateMachines.set(SPIKES_COUNT_ENUM.ZERO, new State(fsm, `${BASE_URL}/zero`));
        this.stateMachines.set(SPIKES_COUNT_ENUM.ONE, new State(fsm, `${BASE_URL}/one`));
        this.stateMachines.set(SPIKES_COUNT_ENUM.TWO, new State(fsm, `${BASE_URL}/two`));
    }

    run(){
        const currentCount = this.fsm.getParams(PARAMS_NAME_ENUM.SPIKES_CURRENT_COUNT);
        this.currentState = this.stateMachines.get(SPIKES_COUNT_MAP_NUMBER_ENUM[currentCount as number]);
    }
}