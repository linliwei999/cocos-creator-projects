System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DataManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfITile(extras) {
    _reporterNs.report("ITile", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "db://assets/Base/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTileManager(extras) {
    _reporterNs.report("TileManager", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5889c0JwQFJq7dfupf9d2pN", "DataManager", undefined);

      _export("default", DataManager = class DataManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "mapInfo", void 0);

          _defineProperty(this, "tileInfo", void 0);

          _defineProperty(this, "mapRowCount", 0);

          _defineProperty(this, "mapColumnCount", 0);

          _defineProperty(this, "levelIndex", 1);
        }

        static get Instance() {
          return super.GetInstance();
        }

        reset() {
          this.mapInfo = [];
          this.tileInfo = [];
          this.mapRowCount = 0;
          this.mapColumnCount = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataManager.js.map