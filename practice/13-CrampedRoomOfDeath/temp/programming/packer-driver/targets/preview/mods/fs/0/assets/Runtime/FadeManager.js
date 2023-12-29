System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DEFAULT_DURATION, DrawManager, RenderRoot2D, game, createUINode, FadeManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "db://assets/Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEFAULT_DURATION(extras) {
    _reporterNs.report("DEFAULT_DURATION", "db://assets/Scripts/UI/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrawManager(extras) {
    _reporterNs.report("DrawManager", "db://assets/Scripts/UI/DrawManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/Utils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      RenderRoot2D = _cc.RenderRoot2D;
      game = _cc.game;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }, function (_unresolved_3) {
      DEFAULT_DURATION = _unresolved_3.DEFAULT_DURATION;
      DrawManager = _unresolved_3.DrawManager;
    }, function (_unresolved_4) {
      createUINode = _unresolved_4.createUINode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56868wADYVMgaxf+DEoADbs", "FadeManager", undefined);

      _export("default", FadeManager = class FadeManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_fader", null);
        }

        static get Instance() {
          return super.GetInstance();
        }

        get fader() {
          if (this._fader) {
            return this._fader;
          }

          var root = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          root.addComponent(RenderRoot2D);
          var fadeNode = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          fadeNode.setParent(root);
          this._fader = fadeNode.addComponent(_crd && DrawManager === void 0 ? (_reportPossibleCrUseOfDrawManager({
            error: Error()
          }), DrawManager) : DrawManager);

          this._fader.init(); //常驻组件


          game.addPersistRootNode(root);
          return this._fader;
        }

        fadeIn(duration) {
          if (duration === void 0) {
            duration = _crd && DEFAULT_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_DURATION({
              error: Error()
            }), DEFAULT_DURATION) : DEFAULT_DURATION;
          }

          return this.fader.fadeIn(duration);
        }

        fadeOut(duration) {
          if (duration === void 0) {
            duration = _crd && DEFAULT_DURATION === void 0 ? (_reportPossibleCrUseOfDEFAULT_DURATION({
              error: Error()
            }), DEFAULT_DURATION) : DEFAULT_DURATION;
          }

          return this.fader.fadeOut(duration);
        }

        mask() {
          return this.fader.mask();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FadeManager.js.map