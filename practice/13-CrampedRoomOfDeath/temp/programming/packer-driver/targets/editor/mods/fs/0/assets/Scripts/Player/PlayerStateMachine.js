System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, AnimationClip, Component, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, State, _dec, _class, _temp, _crd, ccclass, property, getInitParamsTrigger, PlayerStateMachine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
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
      AnimationClip = _cc.AnimationClip;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff8371A4opHp4NW5+HR1bKG", "PlayerStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator); //自定义联合类型

      _export("getInitParamsTrigger", getInitParamsTrigger = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER,
          value: false
        };
      });

      _export("PlayerStateMachine", PlayerStateMachine = (_dec = ccclass('PlayerStateMachine'), _dec(_class = (_temp = class PlayerStateMachine extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_currentState", null);

          _defineProperty(this, "params", new Map());

          _defineProperty(this, "stateMachines", new Map());

          _defineProperty(this, "animationComponent", void 0);

          _defineProperty(this, "waitingList", []);
        }

        getParams(paramsName) {
          if (this.params.has(paramsName)) {
            return this.params.get(paramsName).value;
          }
        }

        setParams(paramsName, value) {
          if (this.params.has(paramsName)) {
            this.params.get(paramsName).value = value;
            this.run(); //重置trigger

            this.restTrigger();
          }
        }

        get currentState() {
          return this._currentState;
        }

        set currentState(newState) {
          this._currentState = newState;

          this._currentState.run();
        }

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
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, getInitParamsTrigger());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURNLEFT, getInitParamsTrigger());
        }

        initStateMachine() {
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, 'texture/player/idle/top', AnimationClip.WrapMode.Loop));
          this.stateMachines.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURNLEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(this, 'texture/player/turnleft/top'));
        }

        initAnimationEvent() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            const name = this.animationComponent.defaultClip.name;
            const whiteList = ['turn'];

            if (whiteList.some(v => name.includes(v))) {
              this.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE, true);
            }
          });
        }

        run() {
          switch (this.currentState) {
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURNLEFT):
            case this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE):
              if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURNLEFT).value) {
                this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).TURNLEFT);
              } else if (this.params.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE).value) {
                this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                  error: Error()
                }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
              }

              break;

            default:
              this.currentState = this.stateMachines.get((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
                error: Error()
              }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).IDLE);
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerStateMachine.js.map