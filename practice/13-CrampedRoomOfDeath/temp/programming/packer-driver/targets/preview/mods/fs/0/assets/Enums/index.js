System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, TILE_TYPE_ENUM, EVENT_ENUM, CONTROLLER_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, DIRECTION_ODER_ENUM, ENTITY_TYPE_ENUM;

  _export({
    TILE_TYPE_ENUM: void 0,
    EVENT_ENUM: void 0,
    CONTROLLER_ENUM: void 0,
    FSM_PARAMS_TYPE_ENUM: void 0,
    PARAMS_NAME_ENUM: void 0,
    DIRECTION_ENUM: void 0,
    ENTITY_STATE_ENUM: void 0,
    DIRECTION_ODER_ENUM: void 0,
    ENTITY_TYPE_ENUM: void 0
  });

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

      (function (EVENT_ENUM) {
        EVENT_ENUM["NEXT_LEVEL"] = "NEXT_LEVEL";
        EVENT_ENUM["PLAYER_CTRL"] = "PLAYER_CTRL";
      })(EVENT_ENUM || _export("EVENT_ENUM", EVENT_ENUM = {}));

      (function (CONTROLLER_ENUM) {
        CONTROLLER_ENUM["TOP"] = "TOP";
        CONTROLLER_ENUM["BOTTOM"] = "BOTTOM";
        CONTROLLER_ENUM["LEFT"] = "LEFT";
        CONTROLLER_ENUM["RIGHT"] = "RIGHT";
        CONTROLLER_ENUM["TURNLEFT"] = "TURNLEFT";
        CONTROLLER_ENUM["TURNRIGHT"] = "TURNRIGHT";
      })(CONTROLLER_ENUM || _export("CONTROLLER_ENUM", CONTROLLER_ENUM = {}));

      (function (FSM_PARAMS_TYPE_ENUM) {
        FSM_PARAMS_TYPE_ENUM["NUMBER"] = "NUMBER";
        FSM_PARAMS_TYPE_ENUM["TRIGGER"] = "TRIGGER";
      })(FSM_PARAMS_TYPE_ENUM || _export("FSM_PARAMS_TYPE_ENUM", FSM_PARAMS_TYPE_ENUM = {}));

      (function (PARAMS_NAME_ENUM) {
        PARAMS_NAME_ENUM["IDLE"] = "IDLE";
        PARAMS_NAME_ENUM["TURNLEFT"] = "TURNLEFT";
        PARAMS_NAME_ENUM["DIRECTION"] = "DIRECTION";
      })(PARAMS_NAME_ENUM || _export("PARAMS_NAME_ENUM", PARAMS_NAME_ENUM = {}));

      (function (DIRECTION_ENUM) {
        DIRECTION_ENUM["TOP"] = "TOP";
        DIRECTION_ENUM["BOTTOM"] = "BOTTOM";
        DIRECTION_ENUM["RIGHT"] = "RIGHT";
        DIRECTION_ENUM["LEFT"] = "LEFT";
      })(DIRECTION_ENUM || _export("DIRECTION_ENUM", DIRECTION_ENUM = {}));

      (function (ENTITY_STATE_ENUM) {
        ENTITY_STATE_ENUM["IDLE"] = "IDLE";
        ENTITY_STATE_ENUM["TURNLEFT"] = "TURNLEFT";
      })(ENTITY_STATE_ENUM || _export("ENTITY_STATE_ENUM", ENTITY_STATE_ENUM = {}));

      (function (DIRECTION_ODER_ENUM) {
        DIRECTION_ODER_ENUM[DIRECTION_ODER_ENUM["TOP"] = 0] = "TOP";
        DIRECTION_ODER_ENUM[DIRECTION_ODER_ENUM["BOTTOM"] = 1] = "BOTTOM";
        DIRECTION_ODER_ENUM[DIRECTION_ODER_ENUM["RIGHT"] = 2] = "RIGHT";
        DIRECTION_ODER_ENUM[DIRECTION_ODER_ENUM["LEFT"] = 3] = "LEFT";
      })(DIRECTION_ODER_ENUM || _export("DIRECTION_ODER_ENUM", DIRECTION_ODER_ENUM = {}));

      (function (ENTITY_TYPE_ENUM) {
        ENTITY_TYPE_ENUM["PLAYER"] = "PLAYER";
      })(ENTITY_TYPE_ENUM || _export("ENTITY_TYPE_ENUM", ENTITY_TYPE_ENUM = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map