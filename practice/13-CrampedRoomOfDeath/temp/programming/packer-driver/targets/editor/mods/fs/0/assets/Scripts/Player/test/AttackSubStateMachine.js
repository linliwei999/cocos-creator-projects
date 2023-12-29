System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DirectionSubStateMachine, DIRECTION_ENUM, SHAKE_TYPE_ENUM, State, ANIMATION_SPEED, AnimationClip, AttackSubStateMachine, _crd, BASE_URL;

  function _reportPossibleCrUseOfDirectionSubStateMachine(extras) {
    _reporterNs.report("DirectionSubStateMachine", "../../Base/DirectionSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../../Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "../../Base/State", _context.meta, extras);
  }

  function _reportPossibleCrUseOfANIMATION_SPEED(extras) {
    _reporterNs.report("ANIMATION_SPEED", "../../Base/State", _context.meta, extras);
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
      SHAKE_TYPE_ENUM = _unresolved_3.SHAKE_TYPE_ENUM;
    }, function (_unresolved_4) {
      State = _unresolved_4.default;
      ANIMATION_SPEED = _unresolved_4.ANIMATION_SPEED;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7474d3eV6pCmJD98KGLuzl7", "AttackSubStateMachine", undefined);

      BASE_URL = 'texture/player/attack';

      _export("default", AttackSubStateMachine = class AttackSubStateMachine extends (_crd && DirectionSubStateMachine === void 0 ? (_reportPossibleCrUseOfDirectionSubStateMachine({
        error: Error()
      }), DirectionSubStateMachine) : DirectionSubStateMachine) {
        constructor(fsm) {
          super(fsm);
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/top`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            // 第 四帧时触发事件
            func: 'onAttackShake',
            // 事件触发时调用的函数名称
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP]
          }]));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/bottom`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM]
          }]));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/left`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            // 事件触发时调用的函数名称
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT]
          }]));
          this.stateMachines.set((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
            error: Error()
          }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT, new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)(fsm, `${BASE_URL}/right`, AnimationClip.WrapMode.Normal, _crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
            error: Error()
          }), ANIMATION_SPEED) : ANIMATION_SPEED, [{
            frame: (_crd && ANIMATION_SPEED === void 0 ? (_reportPossibleCrUseOfANIMATION_SPEED({
              error: Error()
            }), ANIMATION_SPEED) : ANIMATION_SPEED) * 4,
            func: 'onAttackShake',
            params: [(_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT]
          }]));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AttackSubStateMachine.js.map