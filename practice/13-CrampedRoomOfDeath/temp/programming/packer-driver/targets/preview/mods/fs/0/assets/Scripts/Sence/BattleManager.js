System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, TileMapManager, createUINode, Levels, DataManager, TILE_HEIGHT, TILE_WIDTH, EventManager, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PlayerManager, WoodenSkeletonManager, IronSkeletonManager, DoorManager, BurstManager, SpikesManager, SmokeManager, FadeManager, ShakeManager, _dec, _class, _temp, _crd, ccclass, property, BattleManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "db://assets/Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_HEIGHT(extras) {
    _reporterNs.report("TILE_HEIGHT", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTILE_WIDTH(extras) {
    _reporterNs.report("TILE_WIDTH", "db://assets/Scripts/Tile/TileManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "db://assets/Runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerManager(extras) {
    _reporterNs.report("PlayerManager", "db://assets/Scripts/Player/PlayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWoodenSkeletonManager(extras) {
    _reporterNs.report("WoodenSkeletonManager", "db://assets/Scripts/WoodenSkeleton/WoodenSkeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIronSkeletonManager(extras) {
    _reporterNs.report("IronSkeletonManager", "db://assets/Scripts/IronSkeleton/IronSkeletonManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorManager(extras) {
    _reporterNs.report("DoorManager", "db://assets/Scripts/Door/DoorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "db://assets/Scripts/Burst/BurstManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesManager(extras) {
    _reporterNs.report("SpikesManager", "db://assets/Scripts/Spikes/SpikesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSmokeManager(extras) {
    _reporterNs.report("SmokeManager", "db://assets/Scripts/Smoke/SmokeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFadeManager(extras) {
    _reporterNs.report("FadeManager", "db://assets/Runtime/FadeManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShakeManager(extras) {
    _reporterNs.report("ShakeManager", "db://assets/Scripts/UI/ShakeManager", _context.meta, extras);
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
      DataManager = _unresolved_5.default;
    }, function (_unresolved_6) {
      TILE_HEIGHT = _unresolved_6.TILE_HEIGHT;
      TILE_WIDTH = _unresolved_6.TILE_WIDTH;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.default;
    }, function (_unresolved_8) {
      ENTITY_STATE_ENUM = _unresolved_8.ENTITY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_8.ENTITY_TYPE_ENUM;
      EVENT_ENUM = _unresolved_8.EVENT_ENUM;
    }, function (_unresolved_9) {
      PlayerManager = _unresolved_9.PlayerManager;
    }, function (_unresolved_10) {
      WoodenSkeletonManager = _unresolved_10.WoodenSkeletonManager;
    }, function (_unresolved_11) {
      IronSkeletonManager = _unresolved_11.IronSkeletonManager;
    }, function (_unresolved_12) {
      DoorManager = _unresolved_12.DoorManager;
    }, function (_unresolved_13) {
      BurstManager = _unresolved_13.BurstManager;
    }, function (_unresolved_14) {
      SpikesManager = _unresolved_14.SpikesManager;
    }, function (_unresolved_15) {
      SmokeManager = _unresolved_15.SmokeManager;
    }, function (_unresolved_16) {
      FadeManager = _unresolved_16.default;
    }, function (_unresolved_17) {
      ShakeManager = _unresolved_17.ShakeManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd0bb757aRPvKZVtCUSaBJx", "BattleManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleManager", BattleManager = (_dec = ccclass('BattleManager'), _dec(_class = (_temp = class BattleManager extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "level", void 0);

          _defineProperty(this, "stage", void 0);

          _defineProperty(this, "smokeLayer", void 0);
        }

        onLoad() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex = 1;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL, this.nextLevel, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END, this.checkArrivedDoor, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.generateSmoke, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL, this.nextLevel);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END, this.checkArrivedDoor);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.generateSmoke);
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        initLevel() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var level = (_crd && Levels === void 0 ? (_reportPossibleCrUseOfLevels({
              error: Error()
            }), Levels) : Levels)["level" + (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.levelIndex];

            if (level) {
              yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                error: Error()
              }), FadeManager) : FadeManager).Instance.fader.fadeIn();

              _this.clearLevel();

              _this.level = level; //把地图数据存到数据中心(单例)

              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapInfo = _this.level.mapInfo;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapRowCount = _this.level.mapInfo.length || 0;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.mapColumnCount = _this.level.mapInfo[0].length || 0;
              yield Promise.all([_this.generateTileMap(), _this.generateBursts(), _this.generateSpikes(), _this.generateSmokeLayer(), _this.generateDoor(), _this.generateEnemies(), _this.generatePlayer()]);
              yield (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                error: Error()
              }), FadeManager) : FadeManager).Instance.fader.fadeOut();
            }
          })();
        } //是否切换下一关


        checkArrivedDoor() {
          var {
            player: {
              x: playerX,
              y: playerY
            },
            door: {
              x: doorX,
              y: doorY,
              state: doorState
            }
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;

          if (playerX === doorX && playerY === doorY && doorState === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
            this.nextLevel();
          }
        } //下一关函数


        nextLevel() {
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex++;
          this.initLevel();
        }

        clearLevel() {
          this.stage.destroyAllChildren();
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.reset();
        }

        generateStage() {
          //创建舞台
          this.stage = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          this.stage.setParent(this.node);
          this.stage.addComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager);
        } //生成地图


        generateTileMap() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            var tileMap = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            tileMap.setParent(_this2.stage);
            var tileManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
              error: Error()
            }), TileMapManager) : TileMapManager);
            yield tileManager.init();

            _this2.adaptPos();
          })();
        } //生成玩家


        generatePlayer() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var player = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            player.setParent(_this3.stage);
            var playerManager = player.addComponent(_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
              error: Error()
            }), PlayerManager) : PlayerManager);
            yield playerManager.init(_this3.level.player);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player = playerManager;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_BORN, true);
          })();
        } //生成敌人


        generateEnemies() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            for (var i = 0; i < _this4.level.enemies.length; i++) {
              var enemy = _this4.level.enemies[i]; //生成木骷髅

              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this4.stage);
              var Manager = enemy.type === (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SKELETON_WOODEN ? _crd && WoodenSkeletonManager === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonManager({
                error: Error()
              }), WoodenSkeletonManager) : WoodenSkeletonManager : _crd && IronSkeletonManager === void 0 ? (_reportPossibleCrUseOfIronSkeletonManager({
                error: Error()
              }), IronSkeletonManager) : IronSkeletonManager;
              var manager = node.addComponent(Manager);
              promise.push(manager.init(enemy));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies.push(manager);
            }

            yield Promise.all(promise);
          })();
        } //生成门


        generateDoor() {
          var _this5 = this;

          return _asyncToGenerator(function* () {
            var door = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            door.setParent(_this5.stage);
            var doorManager = door.addComponent(_crd && DoorManager === void 0 ? (_reportPossibleCrUseOfDoorManager({
              error: Error()
            }), DoorManager) : DoorManager);
            yield doorManager.init(_this5.level.door);
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door = doorManager;
          })();
        } //地裂瓦片


        generateBursts() {
          var _this6 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            for (var i = 0; i < _this6.level.bursts.length; i++) {
              var burst = _this6.level.bursts[i]; //生成木骷髅

              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this6.stage);
              var burstManager = node.addComponent(_crd && BurstManager === void 0 ? (_reportPossibleCrUseOfBurstManager({
                error: Error()
              }), BurstManager) : BurstManager);
              promise.push(burstManager.init(burst));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts.push(burstManager);
            }

            yield Promise.all(promise);
          })();
        } //地刺


        generateSpikes() {
          var _this7 = this;

          return _asyncToGenerator(function* () {
            var promise = [];

            for (var i = 0; i < _this7.level.spikes.length; i++) {
              var spikes = _this7.level.spikes[i]; //生成木骷髅

              var node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              node.setParent(_this7.stage);
              var spikesManager = node.addComponent(_crd && SpikesManager === void 0 ? (_reportPossibleCrUseOfSpikesManager({
                error: Error()
              }), SpikesManager) : SpikesManager);
              promise.push(spikesManager.init(spikes));
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes.push(spikesManager);
            }

            yield Promise.all(promise);
          })();
        }

        generateSmokeLayer() {
          var _this8 = this;

          return _asyncToGenerator(function* () {
            _this8.smokeLayer = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();

            _this8.smokeLayer.setParent(_this8.stage);
          })();
        } //生成烟雾


        generateSmoke(x, y, direction) {
          var _this9 = this;

          return _asyncToGenerator(function* () {
            //缓存池
            var item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.smokes.find(smoke => smoke.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

            if (item) {
              console.log('smoke cache pool');
              item.x = x;
              item.y = y;
              item.direction = direction; // item.node.setPosition();

              item.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE;
            } else {
              var smoke = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
                error: Error()
              }), createUINode) : createUINode)();
              smoke.setParent(_this9.smokeLayer);
              var smokeManager = smoke.addComponent(_crd && SmokeManager === void 0 ? (_reportPossibleCrUseOfSmokeManager({
                error: Error()
              }), SmokeManager) : SmokeManager);
              yield smokeManager.init({
                x,
                y,
                direction,
                type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SMOKE,
                state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE
              });
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.smokes.push(smokeManager);
            }
          })();
        } //瓦片地图适配屏幕


        adaptPos() {
          var {
            mapRowCount,
            mapColumnCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var disX = (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * mapRowCount / 2;
          var disY = (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * mapColumnCount / 2 + 80;
          this.stage.getComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager).stop();
          this.stage.setPosition(-disX, disY);
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleManager.js.map