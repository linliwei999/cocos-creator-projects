System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTITY_STATE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, getInitParamsNumber, getInitParamsTrigger, StateMachine, IdleSubStateMachine, DeathSubStateMachine, EntityManager, _dec, _class, _crd, ccclass, property, SmokeStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfIdleSubStateMachine(extras) {
    _reporterNs.report("IdleSubStateMachine", "db://assets/Scripts/Smoke/IdleSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDeathSubStateMachine(extras) {
    _reporterNs.report("DeathSubStateMachine", "db://assets/Scripts/Smoke/DeathSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "db://assets/Base/EntityManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
    }, function (_unresolved_3) {
      getInitParamsNumber = _unresolved_3.getInitParamsNumber;
      getInitParamsTrigger = _unresolved_3.getInitParamsTrigger;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      IdleSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      DeathSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      EntityManager = _unresolved_6.EntityManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "338adBPoshKq7CuuVtYr59K", "SmokeStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SmokeStateMachine", SmokeStateMachine = (_dec = ccclass('SmokeStateMachine'), _dec(_class = class SmokeStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        restTrigger() {
          for (var [_, item] of this.params) {
            if (item.type === (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
              error: Error()
            }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER) {
              item.value = false;
            }
          }
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationComponent = _this.addComponent(Animation);

            _this.initParams();

            _this.initStateMachine();

            _this.initAnimationEvent();

            yield Promise.all(_this.waitingList);
          })();
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
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && IdleSubStateMachine === void 0 ? (_reportPossibleCrUseOfIdleSubStateMachine({
            error: Error()
          }), IdleSubStateMachine) : IdleSubStateMachine)(this));
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DEATH, new (_crd && DeathSubStateMachine === void 0 ? (_reportPossibleCrUseOfDeathSubStateMachine({
            error: Error()
          }), DeathSubStateMachine) : DeathSubStateMachine)(this));
        }

        initAnimationEvent() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            var name = this.animationComponent.defaultClip.name;
            var whiteList = ['idle'];

            if (whiteList.some(v => name.includes(v))) {
              this.node.getComponent(_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
                error: Error()
              }), EntityManager) : EntityManager).state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH;
            }
          });
        }

        run() {
          switch (this.currentState) {
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
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
//# sourceMappingURL=SmokeStateMachine.js.map