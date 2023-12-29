System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, BlockInputEvents, Graphics, view, Color, game, UITransform, _dec, _class, _temp, _crd, ccclass, property, SCREEN_WIDTH, SCREEN_HEIGHT, FADE_STATE_ENUM, DEFAULT_DURATION, DrawManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BlockInputEvents = _cc.BlockInputEvents;
      Graphics = _cc.Graphics;
      view = _cc.view;
      Color = _cc.Color;
      game = _cc.game;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd23eknasdHRZeQjqZ/smF6", "DrawManager", undefined);

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

      _export("DEFAULT_DURATION", DEFAULT_DURATION = 500); //疑问


      _export("DrawManager", DrawManager = (_dec = ccclass('DrawManager'), _dec(_class = (_temp = class DrawManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "ctx", void 0);

          _defineProperty(this, "state", FADE_STATE_ENUM.IDLE);

          _defineProperty(this, "oldTime", 0);

          _defineProperty(this, "duration", 0);

          _defineProperty(this, "fadeResolve", void 0);

          _defineProperty(this, "block", void 0);
        }

        init() {
          this.block = this.addComponent(BlockInputEvents);
          this.ctx = this.addComponent(Graphics);
          const transform = this.getComponent(UITransform);
          transform.setAnchorPoint(0.5, 0.5);
          transform.setContentSize(SCREEN_WIDTH, SCREEN_HEIGHT);
          this.setAlpha(1);
        }

        setAlpha(percent) {
          this.ctx.clear();
          this.ctx.rect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
          this.ctx.fillColor = new Color(0, 0, 0, 255 * percent);
          this.ctx.fill();
          this.block.enabled = percent === 1 ? true : false;
        }

        fadeIn(duration = DEFAULT_DURATION) {
          this.setAlpha(0);
          this.duration = duration;
          this.oldTime = game.totalTime;
          this.state = FADE_STATE_ENUM.FADE_IN;
          return new Promise(resolve => {
            this.fadeResolve = resolve;
          });
        }

        fadeOut(duration = DEFAULT_DURATION) {
          this.setAlpha(1);
          this.duration = duration;
          this.oldTime = game.totalTime;
          this.state = FADE_STATE_ENUM.FADE_OUT;
          return new Promise(resolve => {
            this.fadeResolve = resolve;
          });
        }

        update() {
          const percent = (game.totalTime - this.oldTime) / this.duration;

          switch (this.state) {
            case FADE_STATE_ENUM.FADE_IN:
              if (percent < 1) {
                this.setAlpha(percent);
              } else {
                this.setAlpha(1);
                this.state = FADE_STATE_ENUM.IDLE;
                this.fadeResolve(null);
              }

              break;

            case FADE_STATE_ENUM.FADE_OUT:
              if (percent < 1) {
                this.setAlpha(1 - percent);
              } else {
                this.setAlpha(0);
                this.state = FADE_STATE_ENUM.IDLE;
                this.fadeResolve(null);
              }

              break;

            default:
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DrawManager.js.map