System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM;

  _export("TILE_TYPE_ENUM", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "114c8DL69hI1KadWjMfij6P", "index", undefined);

      (function (TILE_TYPE_ENUM) {
        TILE_TYPE_ENUM["WALL_ROW"] = "WALL_ROW";
        TILE_TYPE_ENUM["WALL_COLUMN"] = "WALL_COLUMN";
        TILE_TYPE_ENUM["WALL_LEFT_TOP"] = "WALL_LEFT_TOP";
        TILE_TYPE_ENUM["WALL_LEFT_BOTTOM"] = "WALL_LEFT_BOTTOM";
        TILE_TYPE_ENUM["WALL_RIGHT_TOP"] = "WALL_RIGHT_TOP";
        TILE_TYPE_ENUM["WALL_RIGHT_BOTTOM"] = "WALL_RIGHT_BOTTOM";
        TILE_TYPE_ENUM["CLIFF_LEFT"] = "CLIFF_LEFT";
        TILE_TYPE_ENUM["CLIFF_CENTER"] = "CLIFF_CENTER";
        TILE_TYPE_ENUM["CLIFF_RIGHT"] = "CLIFF_RIGHT";
        TILE_TYPE_ENUM["FLOOR"] = "FLOOR";
      })(TILE_TYPE_ENUM || _export("TILE_TYPE_ENUM", TILE_TYPE_ENUM = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map