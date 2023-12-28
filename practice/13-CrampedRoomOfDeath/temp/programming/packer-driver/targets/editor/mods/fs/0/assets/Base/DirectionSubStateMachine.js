System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SubStateMachine, DIRECTION_ODER_ENUM, PARAMS_NAME_ENUM, DirectionSubStateMachine, _crd;

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "db://assets/Base/SubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ODER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ODER_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SubStateMachine = _unresolved_2.SubStateMachine;
    }, function (_unresolved_3) {
      DIRECTION_ODER_ENUM = _unresolved_3.DIRECTION_ODER_ENUM;
      PARAMS_NAME_ENUM = _unresolved_3.PARAMS_NAME_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4912z/nbFKioxIgtSDbmTV", "DirectionSubStateMachine", undefined);

      _export("default", DirectionSubStateMachine = class DirectionSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          const value = this.fsm.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION);
          this.currentState = this.stateMachines.get((_crd && DIRECTION_ODER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ODER_ENUM({
            error: Error()
          }), DIRECTION_ODER_ENUM) : DIRECTION_ODER_ENUM)[value]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DirectionSubStateMachine.js.map