System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, view, game, EventManager, EVENT_ENUM, SHAKE_TYPE_ENUM, _dec, _class, _temp, _crd, ccclass, property, SCREEN_WIDTH, SCREEN_HEIGHT, FADE_STATE_ENUM, DEFAULT_DURATION, ShakeManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "db://assets/Runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      view = _cc.view;
      game = _cc.game;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      EVENT_ENUM = _unresolved_3.EVENT_ENUM;
      SHAKE_TYPE_ENUM = _unresolved_3.SHAKE_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02f78Lcg8xK95vcCkw94m6x", "ShakeManager", undefined);

      ({
        ccclass,
        property
      } = _decorator); //当前屏幕宽度

      SCREEN_WIDTH = view.getVisibleSize().width;
      SCREEN_HEIGHT = view.getVisibleSize().height;
      FADE_STATE_ENUM = {
        IDLE: "IDLE",
        FADE_IN: "FADE_IN",
        FADE_OUT: "FADE_OUT"
      };

      _export("DEFAULT_DURATION", DEFAULT_DURATION = 500);

      _export("ShakeManager", ShakeManager = (_dec = ccclass('ShakeManager'), _dec(_class = (_temp = class ShakeManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "isShaking", false);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "oldTime", 0);

          _defineProperty(this, "oldPos", {
            x: 0,
            y: 0
          });
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, this.onShake, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, this.onShake);
        }

        onShake(type) {
          if (this.isShaking) return;
          this.type = type;
          this.oldTime = game.totalTime;
          this.isShaking = true;
          this.oldPos.x = this.node.position.x;
          this.oldPos.y = this.node.position.y;
        }

        stop() {
          this.isShaking = false;
        }

        update() {
          if (this.isShaking) {
            const duration = 200;
            const amount = 6;
            const frequency = 12;
            const currentSecond = (game.totalTime - this.oldTime) / 1000;
            const totalSecond = duration / 1000;
            const offset = amount * Math.sin(frequency * Math.PI * currentSecond);

            if (this.type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP) {
              this.node.setPosition(this.oldPos.x, this.oldPos.y - offset);
            } else if (this.type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM) {
              this.node.setPosition(this.oldPos.x, this.oldPos.y + offset);
            } else if (this.type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT) {
              this.node.setPosition(this.oldPos.x - offset, this.oldPos.y);
            } else if (this.type === (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
              error: Error()
            }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT) {
              this.node.setPosition(this.oldPos.x + offset, this.oldPos.y);
            } //震动结束


            if (currentSecond > totalSecond) {
              this.isShaking = false;
              this.node.setPosition(this.oldPos.x, this.oldPos.y);
            }
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ShakeManager.js.map