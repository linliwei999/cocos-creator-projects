System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, IronSkeletonStateMachine, EnemyManager, _dec, _class, _crd, ccclass, property, IronSkeletonManager;

  function _reportPossibleCrUseOfIronSkeletonStateMachine(extras) {
    _reporterNs.report("IronSkeletonStateMachine", "db://assets/Scripts/IronSkeleton/IronSkeletonStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "db://assets/Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "db://assets/Levels", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      IronSkeletonStateMachine = _unresolved_2.IronSkeletonStateMachine;
    }, function (_unresolved_3) {
      EnemyManager = _unresolved_3.EnemyManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0202tlI/ZBAYfEx6+G6lNe", "IronSkeletonManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IronSkeletonManager", IronSkeletonManager = (_dec = ccclass('IronSkeletonManager'), _dec(_class = class IronSkeletonManager extends (_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager) {
        async init(params) {
          this.fsm = this.node.addComponent(_crd && IronSkeletonStateMachine === void 0 ? (_reportPossibleCrUseOfIronSkeletonStateMachine({
            error: Error()
          }), IronSkeletonStateMachine) : IronSkeletonStateMachine);
          await this.fsm.init();
          super.init(params);
        }

        onDestroy() {
          super.onDestroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=IronSkeletonManager.js.map