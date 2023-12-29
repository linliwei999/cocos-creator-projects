import {
    PARAMS_NAME_ENUM,
    SPIKES_COUNT_MAP_NUMBER_ENUM
} from "db://assets/Enums";
import {SubStateMachine} from "db://assets/Base/SubStateMachine";

export default class SpikesSubStateMachine extends SubStateMachine{

    run(){
        const currentCount = this.fsm.getParams(PARAMS_NAME_ENUM.SPIKES_CURRENT_COUNT);
        this.currentState = this.stateMachines.get(SPIKES_COUNT_MAP_NUMBER_ENUM[currentCount as number]);
    }
}