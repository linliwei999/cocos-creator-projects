System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Sprite, UITransform, TILE_HEIGHT, TILE_WIDTH, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, randomStringByLength, SpikesStateMachine, _dec, _class, _temp, _crd, ccclass, property, SpikesManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpikes(extras) {
    _reporterNs.report("ISpikes", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomStringByLength(extras) {
    _reporterNs.report("randomStringByLength", "db://assets/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesStateMachine(extras) {
    _reporterNs.report("SpikesStateMachine", "db://assets/Scripts/Spikes/SpikesStateMachine", _context.meta, extras);
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
      PARAMS_NAME_ENUM = _unresolved_3.PARAMS_NAME_ENUM;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_3.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_4) {
      randomStringByLength = _unresolved_4.randomStringByLength;
    }, function (_unresolved_5) {
      SpikesStateMachine = _unresolved_5.SpikesStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0476bsZkDFM6Zk/g+PTgXiq", "SpikesManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpikesManager", SpikesManager = (_dec = ccclass('SpikesManager'), _dec(_class = (_temp = class SpikesManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "id", (_crd && randomStringByLength === void 0 ? (_reportPossibleCrUseOfrandomStringByLength({
            error: Error()
          }), randomStringByLength) : randomStringByLength)(12));

          _defineProperty(this, "x", 0);

          _defineProperty(this, "y", 0);

          _defineProperty(this, "fsm", void 0);

          _defineProperty(this, "_count", void 0);

          _defineProperty(this, "_totalCount", void 0);

          _defineProperty(this, "type", void 0);
        }

        get count() {
          return this._count;
        }

        set count(newCount) {
          this._count = newCount;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CURRENT_COUNT, newCount);
        }

        get totalCount() {
          return this._totalCount;
        } //数据驱动视图变化


        set totalCount(newTotalCount) {
          this._totalCount = newTotalCount;
          this.fsm.setParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT, newTotalCount);
        }

        async init(params) {
          const sprite = this.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          const transform = this.getComponent(UITransform);
          transform.setContentSize((_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * 4, (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * 4); // 注册状态机

          this.fsm = this.node.addComponent(_crd && SpikesStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesStateMachine({
            error: Error()
          }), SpikesStateMachine) : SpikesStateMachine);
          await this.fsm.init();
          this.x = params.x;
          this.y = params.y;
          this.type = params.type;
          this.totalCount = (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
            error: Error()
          }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM)[this.type];
          this.count = params.count;
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
//# sourceMappingURL=SpikesManager.js.map