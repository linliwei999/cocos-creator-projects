System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, PARAMS_NAME_ENUM, SPIKES_COUNT_MAP_NUMBER_ENUM, SubStateMachine, SpikesSubStateMachine, _crd;

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_MAP_NUMBER_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSubStateMachine(extras) {
    _reporterNs.report("SubStateMachine", "db://assets/Base/SubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      SPIKES_COUNT_MAP_NUMBER_ENUM = _unresolved_2.SPIKES_COUNT_MAP_NUMBER_ENUM;
    }, function (_unresolved_3) {
      SubStateMachine = _unresolved_3.SubStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9e26zbIVRN7a0vbFlYdjbc", "SpikesSubStateMachine", undefined);

      _export("default", SpikesSubStateMachine = class SpikesSubStateMachine extends (_crd && SubStateMachine === void 0 ? (_reportPossibleCrUseOfSubStateMachine({
        error: Error()
      }), SubStateMachine) : SubStateMachine) {
        run() {
          var currentCount = this.fsm.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CURRENT_COUNT);
          this.currentState = this.stateMachines.get((_crd && SPIKES_COUNT_MAP_NUMBER_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_MAP_NUMBER_ENUM({
            error: Error()
          }), SPIKES_COUNT_MAP_NUMBER_ENUM) : SPIKES_COUNT_MAP_NUMBER_ENUM)[currentCount]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesSubStateMachine.js.map