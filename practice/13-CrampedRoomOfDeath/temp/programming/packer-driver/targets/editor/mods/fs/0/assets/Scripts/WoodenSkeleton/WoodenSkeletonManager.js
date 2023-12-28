System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EntityManager, WoodenSkeletonStateMachine, _dec, _class, _crd, ccclass, property, ANIMATION_SPEED, WoodenSkeletonManager;

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "db://assets/Base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenSkeletonStateMachine(extras) {
    _reporterNs.report("WoodenSkeletonStateMachine", "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
    }, function (_unresolved_3) {
      EntityManager = _unresolved_3.EntityManager;
    }, function (_unresolved_4) {
      WoodenSkeletonStateMachine = _unresolved_4.WoodenSkeletonStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7b11pjBI5NyKe2PYgSgn+U", "WoodenSkeletonManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_SPEED = 1 / 8;

      _export("WoodenSkeletonManager", WoodenSkeletonManager = (_dec = ccclass('WoodenSkeletonManager'), _dec(_class = class WoodenSkeletonManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        async init() {
          this.fsm = this.node.addComponent(_crd && WoodenSkeletonStateMachine === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonStateMachine({
            error: Error()
          }), WoodenSkeletonStateMachine) : WoodenSkeletonStateMachine);
          await this.fsm.init();
          super.init({
            x: 7,
            y: 7,
            type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).PLAYER,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=WoodenSkeletonManager.js.map