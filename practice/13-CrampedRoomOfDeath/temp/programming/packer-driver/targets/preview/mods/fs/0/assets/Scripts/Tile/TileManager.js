System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, TILE_TYPE_ENUM, _dec, _class, _temp, _crd, ccclass, property, TILE_WIDTH, TILE_HEIGHT, TileManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTILE_TYPE_ENUM(extras) {
    _reporterNs.report("TILE_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      TILE_TYPE_ENUM = _unresolved_2.TILE_TYPE_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c67ec8ZJ/dFtIQzOOMVGEIV", "TileManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TILE_WIDTH", TILE_WIDTH = 55);

      _export("TILE_HEIGHT", TILE_HEIGHT = 55);

      _export("TileManager", TileManager = (_dec = ccclass('TileManager'), _dec(_class = (_temp = class TileManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "type", void 0);

          _defineProperty(this, "moveable", void 0);

          _defineProperty(this, "turnable", void 0);
        }

        init(type, spriteFrame, i, j) {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.type = type; //墙壁

            if (_this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_ROW || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_COLUMN || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_TOP || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_TOP || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_LEFT_BOTTOM || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).WALL_RIGHT_BOTTOM) {
              _this.moveable = false;
              _this.turnable = false;
            } else if (_this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_LEFT || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_RIGHT || _this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).CLIFF_CENTER) {
              //悬崖
              _this.moveable = false;
              _this.turnable = true;
            } else if (_this.type === (_crd && TILE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfTILE_TYPE_ENUM({
              error: Error()
            }), TILE_TYPE_ENUM) : TILE_TYPE_ENUM).FLOOR) {
              //地板
              _this.moveable = true;
              _this.turnable = true;
            }

            var sprite = _this.addComponent(Sprite);

            sprite.spriteFrame = spriteFrame;

            var transform = _this.getComponent(UITransform);

            transform.setContentSize(TILE_WIDTH, TILE_HEIGHT);

            _this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT);
          })();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TileManager.js.map