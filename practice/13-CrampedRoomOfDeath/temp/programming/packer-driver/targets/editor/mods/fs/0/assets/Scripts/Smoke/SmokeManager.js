System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EntityManager, SmokeStateMachine, _dec, _class, _crd, ccclass, property, SmokeManager;

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "db://assets/Base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeStateMachine(extras) {
    _reporterNs.report("SmokeStateMachine", "db://assets/Scripts/Smoke/SmokeStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EntityManager = _unresolved_2.EntityManager;
    }, function (_unresolved_3) {
      SmokeStateMachine = _unresolved_3.SmokeStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17f9coHS6ZMDLLr6yaKNO5s", "SmokeManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SmokeManager", SmokeManager = (_dec = ccclass('SmokeManager'), _dec(_class = class SmokeManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        async init(params) {
          this.fsm = this.addComponent(_crd && SmokeStateMachine === void 0 ? (_reportPossibleCrUseOfSmokeStateMachine({
            error: Error()
          }), SmokeStateMachine) : SmokeStateMachine);
          await this.fsm.init();
          super.init(params);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SmokeManager.js.map