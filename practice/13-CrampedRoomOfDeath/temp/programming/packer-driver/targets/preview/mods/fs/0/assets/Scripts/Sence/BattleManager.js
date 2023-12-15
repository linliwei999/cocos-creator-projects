System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, TileMapManager, _dec, _class, _crd, ccclass, property, BattleManager;

  function _reportPossibleCrUseOfTileMapManager(extras) {
    _reporterNs.report("TileMapManager", "db://assets/Scripts/Tile/TileMapManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      TileMapManager = _unresolved_2.TileMapManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd0bb757aRPvKZVtCUSaBJx", "BattleManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec(_class = class BattleManager extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.generateTileMap();
        }

        generateTileMap() {
          //创建舞台
          var stage = new Node();
          stage.setParent(this.node);
          var tileMap = new Node();
          tileMap.setParent(stage);
          var tileManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          tileManager.init();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleManager.js.map