System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DIRECTION_ENUM, State, ANIMATION_SPEED, AnimationClip, DirectionSubStateMachine, IdleSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "db://assets/Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIMATION_SPEED(extras) {
    _reporterNs.report("ANIMATION_SPEED", "db://assets/Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDirectionSubStateMachine(extras) {
    _reporterNs.report("DirectionSubStateMachine", "db://assets/Base/DirectionSubStateMachine", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
    }, function (_unresolved_3) {
      State = _unresolved_3.default;
      ANIMATION_SPEED = _unresolved_3.ANIMATION_SPEED;
    }, function (_unresolved_4) {
      DirectionSubStateMachine = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88aa3GhpMNGrYntb4zdQTD/", "IdleSubStateMachine", undefined);

      BASE_URL = 'texture/smoke/idle';

      _export("default", IdleSubStateMachine = class IdleSubStateMachine extends (_crd && DirectionSubStateMachine === void 0 ? (_reportPossibleCrUseOfDirectionSubStateMachine({
        error: Error()
      }), DirectionSubStateMachine) : DirectionSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/top", AnimationClip.WrapMode.Normal, (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/bottom", AnimationClip.WrapMode.Normal, (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/right", AnimationClip.WrapMode.Normal, (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, BASE_URL + "/left", AnimationClip.WrapMode.Normal, (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED) / 1.5));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IdleSubStateMachine.js.map