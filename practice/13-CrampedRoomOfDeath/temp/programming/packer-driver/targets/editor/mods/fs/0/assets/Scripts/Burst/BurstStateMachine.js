System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, getInitParamsNumber, getInitParamsTrigger, StateMachine, State, _dec, _class, _crd, ccclass, property, BASE_URL, BurstStateMachine;

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsNumber(extras) {
    _reporterNs.report("getInitParamsNumber", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsTrigger(extras) {
    _reporterNs.report("getInitParamsTrigger", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "db://assets/Base/State", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
    }, function (_unresolved_3) {
      getInitParamsNumber = _unresolved_3.getInitParamsNumber;
      getInitParamsTrigger = _unresolved_3.getInitParamsTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      State = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e91ee70jZBISIX/I4T9o/es", "BurstStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      BASE_URL = 'texture/burst';

      _export("BurstStateMachine", BurstStateMachine = (_dec = ccclass('BurstStateMachine'), _dec(_class = class BurstStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        restTrigger() {
          for (const [_, item] of this.params) {
            if (item.type === (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
              error: Error()
            }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER) {
              item.value = false;
            }
          }
        }

        async init() {
          this.animationComponent = this.addComponent(Animation);
          this.initParams();
          this.initStateMachine();
          this.initAnimationEvent();
          await Promise.all(this.waitingList);
        }

        initParams() {
          //注册参数
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, (_crd && getInitParamsTrigger === void 0 ? (_reportPossibleCrUseOfgetInitParamsTrigger({
            error: Error()
          }), getInitParamsTrigger) : getInitParamsTrigger)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK, (_crd && getInitParamsTrigger === void 0 ? (_reportPossibleCrUseOfgetInitParamsTrigger({
            error: Error()
          }), getInitParamsTrigger) : getInitParamsTrigger)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, (_crd && getInitParamsTrigger === void 0 ? (_reportPossibleCrUseOfgetInitParamsTrigger({
            error: Error()
          }), getInitParamsTrigger) : getInitParamsTrigger)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
        }

        initStateMachine() {
          //注册子状态机
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, `${BASE_URL}/idle`));
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, `${BASE_URL}/attack`));
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, `${BASE_URL}/death`));
        }

        initAnimationEvent() {// this.animationComponent.on(Animation.EventType.FINISHED, ()=> {
          //     const name = this.animationComponent.defaultClip.name;
          //     const whiteList = ['attack'];
          //     if(whiteList.some(v=> name.includes(v))){
          //         this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
          //     }
          // });
        }

        run() {
          switch (this.currentState) {
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK):
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH):
              if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
              } else if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK).value) {
                this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).ATTACK);
              } else if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH).value) {
                this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BurstStateMachine.js.map