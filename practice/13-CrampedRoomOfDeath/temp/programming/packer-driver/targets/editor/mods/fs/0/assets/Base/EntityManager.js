System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, TILE_HEIGHT, TILE_WIDTH, DIRECTION_ODER_ENUM, PARAMS_NAME_ENUM, randomStringByLength, _dec, _class, _temp, _crd, ccclass, property, ANIMATION_SPEED, EntityManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ODER_ENUM(extras) {
    _reporterNs.report("DIRECTION_ODER_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomStringByLength(extras) {
    _reporterNs.report("randomStringByLength", "db://assets/Utils", _context.meta, extras);
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
      TILE_HEIGHT = _unresolved_2.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_2.TILE_WIDTH;
    }, function (_unresolved_3) {
      DIRECTION_ODER_ENUM = _unresolved_3.DIRECTION_ODER_ENUM;
      PARAMS_NAME_ENUM = _unresolved_3.PARAMS_NAME_ENUM;
    }, function (_unresolved_4) {
      randomStringByLength = _unresolved_4.randomStringByLength;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2b48tJgK5GwaoEiUN2W/VA", "EntityManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_SPEED = 1 / 8;

      _export("EntityManager", EntityManager = (_dec = ccclass('EntityManager'), _dec(_class = (_temp = class EntityManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "id", (_crd && randomStringByLength === void 0 ? (_reportPossibleCrUseOfrandomStringByLength({
            error: Error()
          }), randomStringByLength) : randomStringByLength)(12));

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "fsm", void 0);

          _defineProperty(this, "_direction", void 0);

          _defineProperty(this, "_state", void 0);

          _defineProperty(this, "type", void 0);
        }

        get direction() {
          return this._direction;
        }

        set direction(newDirection) {
          this._direction = newDirection;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).DIRECTION, (_crd && DIRECTION_ODER_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ODER_ENUM({
            error: Error()
          }), DIRECTION_ODER_ENUM) : DIRECTION_ODER_ENUM)[this._direction]);
        }

        get state() {
          return this._state;
        } //数据驱动视图变化


        set state(newState) {
          this._state = newState;
          this.fsm.setParams(this._state, true);
        }

        async init(params) {
          const sprite = this.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          const transform = this.getComponent(UITransform);
          transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4);
          this.x = params.x;
          this.y = params.y;
          this.type = params.type;
          this.direction = params.direction;
          this.state = params.state;
        }

        update() {
          this.node.setPosition(this.x * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) - 1.5 * (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH), -this.y * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) + 1.5 * (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT));
        }

        onDestroy() {}

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EntityManager.js.map