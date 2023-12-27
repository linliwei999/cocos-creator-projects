System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationClip, Sprite, animation, ResourceManager, State, _crd, ANIMATION_SPEED;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/Scripts/Player/PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceManager(extras) {
    _reporterNs.report("ResourceManager", "db://assets/Runtime/ResourceManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AnimationClip = _cc.AnimationClip;
      Sprite = _cc.Sprite;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      ResourceManager = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "659f1dCZadAiKfvD2O0I0Sw", "State", undefined);

      ANIMATION_SPEED = 1 / 8;

      _export("default", State = class State {
        constructor(fsm, path, wrapMode) {
          if (wrapMode === void 0) {
            wrapMode = AnimationClip.WrapMode.Normal;
          }

          _defineProperty(this, "animationClip", void 0);

          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.init();
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var promise = (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
              error: Error()
            }), ResourceManager) : ResourceManager).Instance.loadDir(_this.path);

            _this.fsm.waitingList.push(promise);

            var spriteFrames = yield promise;
            _this.animationClip = new AnimationClip();
            var track = new animation.ObjectTrack(); // 创建一个对象轨道

            track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径

            var frames = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item]); // 为 x 通道的曲线添加关键帧

            track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

            _this.animationClip.addTrack(track);

            _this.animationClip.duration = frames.length * ANIMATION_SPEED; // 整个动画剪辑的周期

            _this.animationClip.wrapMode = _this.wrapMode;
          })();
        }

        run() {
          this.fsm.animationComponent.defaultClip = this.animationClip;
          this.fsm.animationComponent.play();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=State.js.map