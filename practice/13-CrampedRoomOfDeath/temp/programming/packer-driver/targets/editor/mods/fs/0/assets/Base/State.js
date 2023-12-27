System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationClip, Sprite, animation, ResourceManager, State, _crd, ANIMATION_SPEED;

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
        constructor(fsm, path, wrapMode = AnimationClip.WrapMode.Normal) {
          _defineProperty(this, "animationClip", void 0);

          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.init();
        }

        async init() {
          const promise = (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
            error: Error()
          }), ResourceManager) : ResourceManager).Instance.loadDir(this.path);
          this.fsm.waitingList.push(promise);
          const spriteFrames = await promise;
          this.animationClip = new AnimationClip();
          const track = new animation.ObjectTrack(); // 创建一个对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径

          const frames = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item]); // 为 x 通道的曲线添加关键帧

          track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

          this.animationClip.addTrack(track);
          this.animationClip.name = this.path;
          this.animationClip.duration = frames.length * ANIMATION_SPEED; // 整个动画剪辑的周期

          this.animationClip.wrapMode = this.wrapMode;
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