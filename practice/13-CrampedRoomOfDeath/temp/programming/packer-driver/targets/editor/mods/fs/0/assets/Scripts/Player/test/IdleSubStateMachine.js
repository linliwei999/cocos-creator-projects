System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DirectionSubStateMachine, DIRECTION_ENUM, State, AnimationClip, IdleSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfDirectionSubStateMachine(extras) {
    _reporterNs.report("DirectionSubStateMachine", "../../Base/DirectionSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Base/State", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      DirectionSubStateMachine = _unresolved_2.default;
    }, function (_unresolved_3) {
      DIRECTION_ENUM = _unresolved_3.DIRECTION_ENUM;
    }, function (_unresolved_4) {
      State = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e19eBKUZNMtIFUU07cLdGH", "IdleSubStateMachine", undefined);

      BASE_URL = 'texture/player/idle';

      _export("default", IdleSubStateMachine = class IdleSubStateMachine extends (_crd && DirectionSubStateMachine === void 0 ? (_reportPossibleCrUseOfDirectionSubStateMachine({
        error: Error()
      }), DirectionSubStateMachine) : DirectionSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Loop));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Loop));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Loop));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Loop));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IdleSubStateMachine.js.map