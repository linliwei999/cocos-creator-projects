System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, UITransform, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c67ec8ZJ/dFtIQzOOMVGEIV", "TileManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TileManager", TileManager = (_dec = ccclass('TileManager'), _dec(_class = class TileManager extends Component {
        async init(spriteFrame, i, j) {
          const sprite = this.addComponent(Sprite);
          sprite.spriteFrame = spriteFrame;
          const transform = this.getComponent(UITransform);
          transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);
          this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileManager.js.map