System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AnimationClip, Sprite, animation, ResourceManager, sortSpriteFrame, State, _crd, ANIMATION_SPEED;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourceManager(extras) {
    _reporterNs.report("ResourceManager", "db://assets/Runtime/ResourceManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsortSpriteFrame(extras) {
    _reporterNs.report("sortSpriteFrame", "db://assets/Utils", _context.meta, extras);
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
    }, function (_unresolved_3) {
      sortSpriteFrame = _unresolved_3.sortSpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "659f1dCZadAiKfvD2O0I0Sw", "State", undefined);

      _export("ANIMATION_SPEED", ANIMATION_SPEED = 1 / 8);

      _export("default", State = class State {
        constructor(fsm, path, wrapMode, speed, events) {
          if (wrapMode === void 0) {
            wrapMode = AnimationClip.WrapMode.Normal;
          }

          if (speed === void 0) {
            speed = ANIMATION_SPEED;
          }

          if (events === void 0) {
            events = [];
          }

          _defineProperty(this, "animationClip", void 0);

          this.fsm = fsm;
          this.path = path;
          this.wrapMode = wrapMode;
          this.speed = speed;
          this.events = events;
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

            var frames = (_crd && sortSpriteFrame === void 0 ? (_reportPossibleCrUseOfsortSpriteFrame({
              error: Error()
            }), sortSpriteFrame) : sortSpriteFrame)(spriteFrames).map((item, index) => [_this.speed * index, item]); // 为 x 通道的曲线添加关键帧

            track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

            _this.animationClip.addTrack(track);

            _this.animationClip.name = _this.path;
            _this.animationClip.duration = frames.length * _this.speed; // 整个动画剪辑的周期

            _this.animationClip.wrapMode = _this.wrapMode; //绑定动画帧事件

            for (var event of _this.events) {
              _this.animationClip.events.push(event);
            }

            _this.animationClip.updateEventDatas(); // const animationComponent = this.node.getComponent(Animation);
            // if (animationComponent && animationComponent.defaultClip) {
            //     const { defaultClip } = animationComponent;
            //     defaultClip.events.push({
            //         frame: 0.5, // 第 0.5 秒时触发事件
            //         func: 'onTriggered', // 事件触发时调用的函数名称
            //         params: [ 0 ], // 向 `func` 传递的参数
            //     });
            //     defaultClip.updateEventDatas();
            // }

          })();
        }

        run() {
          var _this$fsm$animationCo, _this$animationClip;

          if (((_this$fsm$animationCo = this.fsm.animationComponent.defaultClip) === null || _this$fsm$animationCo === void 0 ? void 0 : _this$fsm$animationCo.name) === ((_this$animationClip = this.animationClip) === null || _this$animationClip === void 0 ? void 0 : _this$animationClip.name)) {
            return;
          }

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