import DirectionSubStateMachine from "db://assets/Base/DirectionSubStateMachine";
import {StateMachine} from "db://assets/Base/StateMachine";
import { DIRECTION_ENUM } from 'db://assets/Enums'
import State from 'db://assets/Base/State'

const BASE_URL = 'texture/player/turnright';

export default class TurnRightSubStateMachine extends DirectionSubStateMachine {
  constructor(fsm: StateMachine) {
    super(fsm)
    this.stateMachines.set(DIRECTION_ENUM.TOP, new State(fsm, `${BASE_URL}/top`))
    this.stateMachines.set(DIRECTION_ENUM.BOTTOM, new State(fsm, `${BASE_URL}/bottom`))
    this.stateMachines.set(DIRECTION_ENUM.LEFT, new State(fsm, `${BASE_URL}/left`))
    this.stateMachines.set(DIRECTION_ENUM.RIGHT, new State(fsm, `${BASE_URL}/right`))
  }
}
