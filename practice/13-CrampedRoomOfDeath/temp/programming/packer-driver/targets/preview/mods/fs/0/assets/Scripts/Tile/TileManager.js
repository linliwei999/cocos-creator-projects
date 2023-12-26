System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Sprite, UITransform, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
        init(spriteFrame, i, j) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var sprite = _this.addComponent(Sprite);

            sprite.spriteFrame = spriteFrame;

            var transform = _this.getComponent(UITransform);

            transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

            _this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
          })();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileManager.js.map