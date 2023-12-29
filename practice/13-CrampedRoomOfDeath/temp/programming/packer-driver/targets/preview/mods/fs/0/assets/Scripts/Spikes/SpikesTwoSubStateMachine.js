System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SPIKES_COUNT_ENUM, State, SpikesSubStateMachine, SpikesTwoSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_COUNT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "db://assets/Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesSubStateMachine(extras) {
    _reporterNs.report("SpikesSubStateMachine", "db://assets/Scripts/Spikes/SpikesSubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SPIKES_COUNT_ENUM = _unresolved_2.SPIKES_COUNT_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.default;
    }, function (_unresolved_4) {
      SpikesSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06f20oRrMxB+YDwAT7Hj/2P", "SpikesTwoSubStateMachine", undefined);

      BASE_URL = 'texture/spikes/spikestwo';

      _export("default", SpikesTwoSubStateMachine = class SpikesTwoSubStateMachine extends (_crd && SpikesSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesSubStateMachine({
        error: Error()
      }), SpikesSubStateMachine) : SpikesSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachines.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ZERO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/zero"));
          this.stateMachines.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).ONE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/one"));
          this.stateMachines.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).TWO, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/two"));
          this.stateMachines.set((_crd && SPIKES_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_COUNT_ENUM({
            error: Error()
          }), SPIKES_COUNT_ENUM) : SPIKES_COUNT_ENUM).THREE, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/three"));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesTwoSubStateMachine.js.map