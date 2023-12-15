System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Sprite, resources, SpriteFrame, UITransform, Layers, Levels, _dec, _class, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileMapManager;

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
        async init() {
          const level = (_crd && Levels === void 0 ? (_reportPossibleCrUseOfLevels({
            error: Error()
          }), Levels) : Levels)[`level${1}`];
          const {
            mapInfo
          } = level;
          const spriteFrames = await this.loadRes(); // console.log('地图信息：', level );
          // console.log(spriteFrames);

          for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];

            for (let j = 0; j < column.length; j++) {
              const item = column[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = new Node();
              const sprite = node.addComponent(Sprite);
              const imgSrc = `tile (${item.src})`;
              sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
              const transform = node.addComponent(UITransform);
              transform.setContentSize(TILE_WIDTH, TILE_HEIGHT); // node.layer = 1 << 25;

              node.layer = 1 << Layers.nameToLayer("UI_2D");
              node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
              node.setParent(this.node);
            }
          }
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