System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, Animation, AnimationClip, animation, TILE_HEIGHT, TILE_WIDTH, ResourceManager, _dec, _class, _crd, ccclass, property, ANIMATION_SPEED, PlayerManager;

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceManager(extras) {
    _reporterNs.report("ResourceManager", "db://assets/Runtime/ResourceManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      animation = _cc.animation;
    }, function (_unresolved_2) {
      TILE_HEIGHT = _unresolved_2.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_2.TILE_WIDTH;
    }, function (_unresolved_3) {
      ResourceManager = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "efe8824aOFJmLvfxa9L9Ozm", "PlayerManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_SPEED = 1 / 8;

      _export("PlayerManager", PlayerManager = (_dec = ccclass('PlayerManager'), _dec(_class = class PlayerManager extends Component {
        async init() {
          const sprite = this.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          const transform = this.getComponent(UITransform);
          transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
          const spriteFrames = await (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
            error: Error()
          }), ResourceManager) : ResourceManager).Instance.loadDir('texture/player/idle/top');
          const animationComponent = this.addComponent(Animation);
          const animationClip = new AnimationClip();
          const track = new animation.ObjectTrack(); // 创建一个对象轨道

          track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 指定轨道路径

          const frames = spriteFrames.map((item, index) => [ANIMATION_SPEED * index, item]); // 为 x 通道的曲线添加关键帧

          track.channel.curve.assignSorted(frames); // 最后将轨道添加到动画剪辑以应用

          animationClip.addTrack(track);
          animationClip.duration = frames.length * ANIMATION_SPEED; // 整个动画剪辑的周期

          animationClip.wrapMode = AnimationClip.WrapMode.Loop;
          animationComponent.defaultClip = animationClip;
          animationComponent.play();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerManager.js.map