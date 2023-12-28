System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, TileManager, createUINode, randomByRange, DataManager, ResourceManager, _dec, _class, _crd, ccclass, property, TileMapManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfTileManager(extras) {
    _reporterNs.report("TileManager", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomByRange(extras) {
    _reporterNs.report("randomByRange", "db://assets/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "db://assets/Runtime/DataManager", _context.meta, extras);
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
    }, function (_unresolved_2) {
      TileManager = _unresolved_2.TileManager;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
      randomByRange = _unresolved_3.randomByRange;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      ResourceManager = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ff6PSb9NGBr9EXyYWahP6", "TileMapManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TileMapManager", TileMapManager = (_dec = ccclass('TileMapManager'), _dec(_class = class TileMapManager extends Component {
        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var spriteFrames = yield (_crd && ResourceManager === void 0 ? (_reportPossibleCrUseOfResourceManager({
              error: Error()
            }), ResourceManager) : ResourceManager).Instance.loadDir("texture/tile/tile"); // console.log('地图信息：', level );
            // console.log(spriteFrames);

            var {
              mapInfo
            } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.tileInfo = [];

            for (var i = 0; i < mapInfo.length; i++) {
              var column = mapInfo[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.tileInfo[i] = [];

              var _loop = function _loop(j) {
                var item = column[j];

                if (item.src === null || item.type === null) {
                  return "continue";
                }

                var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                  error: Error()
                }), createUINode) : createUINode)();
                var number = item.src;

                if ((number === 1 || number === 5 || number === 9) && i % 2 === 0 && j % 2 === 0) {
                  number += (_crd && randomByRange === void 0 ? (_reportPossibleCrUseOfrandomByRange({
                    error: Error()
                  }), randomByRange) : randomByRange)(0, 4);
                }

                var imgSrc = "tile (" + number + ")";
                var spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0];
                var tileManager = node.addComponent(_crd && TileManager === void 0 ? (_reportPossibleCrUseOfTileManager({
                  error: Error()
                }), TileManager) : TileManager);
                var type = item.type;
                tileManager.init(type, spriteFrame, i, j);
                (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                  error: Error()
                }), DataManager) : DataManager).Instance.tileInfo[i][j] = tileManager;
                node.setParent(_this.node);
              };

              for (var j = 0; j < column.length; j++) {
                var _ret = _loop(j);

                if (_ret === "continue") continue;
              }
            }
          })();
        } // loadRes () {
        //     return new Promise<SpriteFrame[]>((resolve, reject) => {
        //         // 加载 test assets 目录下所有 SpriteFrame，并且获取它们的路径
        //         resources.loadDir("texture/tile/tile", SpriteFrame, function (err, assets) {
        //             if(err){
        //                 reject(err);
        //                 return
        //             }
        //             resolve(assets);
        //         });
        //     });
        //
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileMapManager.js.map