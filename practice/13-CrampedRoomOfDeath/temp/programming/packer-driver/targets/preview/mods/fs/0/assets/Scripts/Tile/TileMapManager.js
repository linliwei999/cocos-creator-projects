System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Sprite, resources, SpriteFrame, UITransform, Layers, Levels, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileMapManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfLevels(extras) {
    _reporterNs.report("Levels", "db://assets/Levels", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      Levels = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ff6PSb9NGBr9EXyYWahP6", "TileMapManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var level = (_crd && Levels === void 0 ? (_reportPossibleCrUseOfLevels({
              error: Error()
            }), Levels) : Levels)["level" + 1];
            var {
              mapInfo
            } = level;
            var spriteFrames = yield _this.loadRes(); // console.log('地图信息：', level );
            // console.log(spriteFrames);

            for (var i = 0; i < mapInfo.length; i++) {
              var column = mapInfo[i];

              var _loop = function _loop(j) {
                var item = column[j];

                if (item.src === null || item.type === null) {
                  return "continue";
                }

                var node = new Node();
                var sprite = node.addComponent(Sprite);
                var imgSrc = "tile (" + item.src + ")";
                sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
                var transform = node.addComponent(UITransform);
                transform.setContentSize(TILE_WIDTH, TILE_HEIGHT); // node.layer = 1 << 25;

                node.layer = 1 << Layers.nameToLayer("UI_2D");
                node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
                node.setParent(_this.node);
              };

              for (var j = 0; j < column.length; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
              }
            }
          })();
        }

        loadRes() {
          return new Promise((resolve, reject) => {
            // 加载 test assets 目录下所有 SpriteFrame，并且获取它们的路径
            resources.loadDir("texture/tile/tile", SpriteFrame, function (err, assets) {
              if (err) {
                reject(err);
                return;
              }

              resolve(assets);
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileMapManager.js.map