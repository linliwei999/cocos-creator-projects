System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataManager, _crd, DataManagerInstance;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfITile(extras) {
    _reporterNs.report("ITile", "db://assets/Levels", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5889c0JwQFJq7dfupf9d2pN", "DataManager", undefined);

      DataManager = class DataManager {
        constructor() {
          _defineProperty(this, "mapInfo", void 0);

          _defineProperty(this, "mapRowCount", void 0);

          _defineProperty(this, "mapColumnCount", void 0);
        }

      };

      _export("DataManagerInstance", DataManagerInstance = new DataManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataManager.js.map