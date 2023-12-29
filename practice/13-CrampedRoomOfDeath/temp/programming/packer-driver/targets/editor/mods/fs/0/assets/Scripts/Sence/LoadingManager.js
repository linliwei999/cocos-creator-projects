System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, resources, ProgressBar, FadeManager, SCENE_ENUM, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LoadingManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      director = _cc.director;
      resources = _cc.resources;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      FadeManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      SCENE_ENUM = _unresolved_3.SCENE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39c214SYSRFoLwm2oZovdMg", "LoadingManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadingManager", LoadingManager = (_dec = ccclass('LoadingManager'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class LoadingManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar", _descriptor, this);
        }

        onLoad() {
          resources.preloadDir("texture", (current, total) => {
            this.bar.progress = current / total;
          }, async () => {
            //成功回调
            await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fader.fadeIn(300);
            director.loadScene((_crd && SCENE_ENUM === void 0 ? (_reportPossibleCrUseOfSCENE_ENUM({
              error: Error()
            }), SCENE_ENUM) : SCENE_ENUM).Battle);
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoadingManager.js.map