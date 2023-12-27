System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, FSM_PARAMS_TYPE_ENUM, _dec, _class, _temp, _crd, ccclass, property, getInitParamsTrigger, getInitParamsNumber, StateMachine;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "db://assets/Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "db://assets/Base/SubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f7d7hg8sBCqJO+Np0y7ZVI", "StateMachine", undefined);

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

      _export("getInitParamsNumber", getInitParamsNumber = () => {
        return {
          type: (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
            error: Error()
          }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).NUMBER,
          value: 0
        };
      });

      _export("StateMachine", StateMachine = (_dec = ccclass('StateMachine'), _dec(_class = (_temp = class StateMachine extends Component {
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

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StateMachine.js.map