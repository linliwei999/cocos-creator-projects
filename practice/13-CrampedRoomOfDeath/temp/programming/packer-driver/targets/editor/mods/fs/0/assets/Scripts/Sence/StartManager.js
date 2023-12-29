System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, director, FadeManager, SCENE_ENUM, _dec, _class, _crd, ccclass, property, StartManager;

  function _reportPossibleCrUseOfFadeManager(extras) {
    _reporterNs.report("FadeManager", "db://assets/Runtime/FadeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCENE_ENUM(extras) {
    _reporterNs.report("SCENE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_unresolved_2) {
      FadeManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      SCENE_ENUM = _unresolved_3.SCENE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "309e0IThjNFp6z8Yx9b0bqU", "StartManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartManager", StartManager = (_dec = ccclass('StartManager'), _dec(_class = class StartManager extends Component {
        onLoad() {
          // director.preloadScene(SCENE_ENUM.Battle);
          director.preloadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).Battle);
          (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
            error: Error()
          }), FadeManager) : FadeManager).Instance.fader.fadeOut(1000); // this.node.on(Node.EventType.TOUCH_START, this.handleStart, this);

          this.node.once(Node.EventType.TOUCH_START, this.handleStart, this);
        }

        async handleStart() {
          // await FadeManager.Instance.fader.fadeIn(300);
          director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
            error: Error()
          }), SCENE_ENUM) : SCENE_ENUM).Loading);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=StartManager.js.map