System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, resources, SpriteFrame, TileManager, createUINode, DataManagerInstance, _dec, _class, _crd, ccclass, property, TileMapManager;

  function _reportPossibleCrUseOfTileManager(extras) {
    _reporterNs.report("TileManager", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManagerInstance(extras) {
    _reporterNs.report("DataManagerInstance", "db://assets/Runtime/DataManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      TileManager = _unresolved_2.TileManager;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
    }, function (_unresolved_4) {
      DataManagerInstance = _unresolved_4.DataManagerInstance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ff6PSb9NGBr9EXyYWahP6", "TileMapManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        async init() {
          const spriteFrames = await this.loadRes(); // console.log('地图信息：', level );
          // console.log(spriteFrames);

          const {
            mapInfo
          } = _crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
            error: Error()
          }), DataManagerInstance) : DataManagerInstance;

          for (let i = 0; i < mapInfo.length; i++) {
            const column = mapInfo[i];

            for (let j = 0; j < column.length; j++) {
              const item = column[j];

              if (item.src === null || item.type === null) {
                continue;
              }

              const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              const imgSrc = `tile (${item.src})`;
              const spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
              const tileManager = node.addComponent(_crd && TileManager === void 0 ? (_reportPossibleCrUseOfTileManager({
                error: Error()
              }), TileManager) : TileManager);
              tileManager.init(spriteFrame, i, j);
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