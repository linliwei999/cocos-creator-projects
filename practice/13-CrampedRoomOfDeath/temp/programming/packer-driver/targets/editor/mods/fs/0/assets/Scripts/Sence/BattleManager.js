System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, TileMapManager, createUINode, Levels, DataManagerInstance, TILE_HEIGHT, TILE_WIDTH, _dec, _class, _temp, _crd, ccclass, property, BattleManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTileMapManager(extras) {
    _reporterNs.report("TileMapManager", "db://assets/Scripts/Tile/TileMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateUINode(extras) {
    _reporterNs.report("createUINode", "db://assets/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevels(extras) {
    _reporterNs.report("Levels", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfILevel(extras) {
    _reporterNs.report("ILevel", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManagerInstance(extras) {
    _reporterNs.report("DataManagerInstance", "db://assets/Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      TileMapManager = _unresolved_2.TileMapManager;
    }, function (_unresolved_3) {
      createUINode = _unresolved_3.createUINode;
    }, function (_unresolved_4) {
      Levels = _unresolved_4.default;
    }, function (_unresolved_5) {
      DataManagerInstance = _unresolved_5.DataManagerInstance;
    }, function (_unresolved_6) {
      TILE_HEIGHT = _unresolved_6.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_6.TILE_WIDTH;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd0bb757aRPvKZVtCUSaBJx", "BattleManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec(_class = (_temp = class BattleManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "level", void 0);

          _defineProperty(this, "stage", void 0);
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        initLevel() {
          const level = (_crd && Levels === void 0 ? (_reportPossibleCrUseOfLevels({
            error: Error()
          }), Levels) : Levels)[`level${1}`];

          if (level) {
            this.level = level; //把地图数据存到数据中心(单例)

            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapInfo = this.level.mapInfo;
            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapRowCount = this.level.mapInfo.length || 0;
            (_crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
              error: Error()
            }), DataManagerInstance) : DataManagerInstance).mapColumnCount = this.level.mapInfo[0].length || 0;
            this.generateTileMap();
          }
        }

        generateStage() {
          //创建舞台
          this.stage = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          this.stage.setParent(this.node);
        }

        generateTileMap() {
          const tileMap = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          tileMap.setParent(this.stage);
          const tileManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          tileManager.init();
          this.adaptPos();
        } //瓦片地图适配屏幕


        adaptPos() {
          const {
            mapRowCount,
            mapColumnCount
          } = _crd && DataManagerInstance === void 0 ? (_reportPossibleCrUseOfDataManagerInstance({
            error: Error()
          }), DataManagerInstance) : DataManagerInstance;
          const disX = (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * mapRowCount / 2;
          const disY = (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * mapColumnCount / 2 + 80;
          this.stage.setPosition(-disX, disY);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleManager.js.map