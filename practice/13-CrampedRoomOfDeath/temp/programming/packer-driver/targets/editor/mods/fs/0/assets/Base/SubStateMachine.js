System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, SubStateMachine, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "db://assets/Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  _export("SubStateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a12db8Awj9E7ofMza/+Y/wB", "SubStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SubStateMachine", SubStateMachine = class SubStateMachine {
        constructor(fsm) {
          _defineProperty(this, "_currentState", null);

          _defineProperty(this, "stateMachines", new Map());

          this.fsm = fsm;
        }

        //状态机列表
        get currentState() {
          return this._currentState;
        }

        set currentState(newState) {
          this._currentState = newState;

          this._currentState.run();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SubStateMachine.js.map