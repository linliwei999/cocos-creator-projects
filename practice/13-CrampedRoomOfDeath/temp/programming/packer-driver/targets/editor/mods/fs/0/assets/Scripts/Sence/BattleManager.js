System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, TileMapManager, createUINode, Levels, DataManager, TILE_HEIGHT, TILE_WIDTH, EventManager, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, PlayerManager, WoodenSkeletonManager, IronSkeletonManager, DoorManager, BurstManager, SpikesManager, SmokeManager, FadeManager, ShakeManager, _dec, _class, _temp, _crd, ccclass, property, BattleManager;

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

  function _reportPossibleCrUseOfIRecord(extras) {
    _reporterNs.report("IRecord", "db://assets/Runtime/DataManager", _context.meta, extras);
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
        constructor(...args) {
          super(...args);

          _defineProperty(this, "level", void 0);

          _defineProperty(this, "stage", void 0);

          _defineProperty(this, "smokeLayer", void 0);

          _defineProperty(this, "inited", false);
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
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP, this.record, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).REVOKE_STEP, this.revoke, this);
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
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP, this.record);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).REVOKE_STEP, this.revoke);
        }

        start() {
          this.generateStage();
          this.initLevel();
        }

        async initLevel() {
          const level = (_crd && Levels === void 0 ? (_reportPossibleCrUseOfLevels({
            error: Error()
          }), Levels) : Levels)[`level${(_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.levelIndex}`];

          if (level) {
            if (this.inited) {
              await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                error: Error()
              }), FadeManager) : FadeManager).Instance.fader.fadeIn();
            } else {
              await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
                error: Error()
              }), FadeManager) : FadeManager).Instance.fader.mask();
            }

            this.clearLevel();
            this.level = level; //把地图数据存到数据中心(单例)

            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapInfo = this.level.mapInfo;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapRowCount = this.level.mapInfo.length || 0;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.mapColumnCount = this.level.mapInfo[0].length || 0;
            await Promise.all([this.generateTileMap(), this.generateBursts(), this.generateSpikes(), this.generateSmokeLayer(), this.generateDoor(), this.generateEnemies(), this.generatePlayer()]);
            await (_crd && FadeManager === void 0 ? (_reportPossibleCrUseOfFadeManager({
              error: Error()
            }), FadeManager) : FadeManager).Instance.fader.fadeOut();
            this.inited = true;
          }
        } //是否切换下一关


        checkArrivedDoor() {
          const {
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


        async generateTileMap() {
          const tileMap = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          tileMap.setParent(this.stage);
          const tileManager = tileMap.addComponent(_crd && TileMapManager === void 0 ? (_reportPossibleCrUseOfTileMapManager({
            error: Error()
          }), TileMapManager) : TileMapManager);
          await tileManager.init();
          this.adaptPos();
        } //生成玩家


        async generatePlayer() {
          const player = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          player.setParent(this.stage);
          const playerManager = player.addComponent(_crd && PlayerManager === void 0 ? (_reportPossibleCrUseOfPlayerManager({
            error: Error()
          }), PlayerManager) : PlayerManager);
          await playerManager.init(this.level.player);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.player = playerManager;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_BORN, true);
        } //生成敌人


        async generateEnemies() {
          const promise = [];

          for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i]; //生成木骷髅

            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const Manager = enemy.type === (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SKELETON_WOODEN ? _crd && WoodenSkeletonManager === void 0 ? (_reportPossibleCrUseOfWoodenSkeletonManager({
              error: Error()
            }), WoodenSkeletonManager) : WoodenSkeletonManager : _crd && IronSkeletonManager === void 0 ? (_reportPossibleCrUseOfIronSkeletonManager({
              error: Error()
            }), IronSkeletonManager) : IronSkeletonManager;
            const manager = node.addComponent(Manager);
            promise.push(manager.init(enemy));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.push(manager);
          }

          await Promise.all(promise);
        } //生成门


        async generateDoor() {
          const door = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          door.setParent(this.stage);
          const doorManager = door.addComponent(_crd && DoorManager === void 0 ? (_reportPossibleCrUseOfDoorManager({
            error: Error()
          }), DoorManager) : DoorManager);
          await doorManager.init(this.level.door);
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door = doorManager;
        } //地裂瓦片


        async generateBursts() {
          const promise = [];

          for (let i = 0; i < this.level.bursts.length; i++) {
            const burst = this.level.bursts[i]; //生成木骷髅

            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const burstManager = node.addComponent(_crd && BurstManager === void 0 ? (_reportPossibleCrUseOfBurstManager({
              error: Error()
            }), BurstManager) : BurstManager);
            promise.push(burstManager.init(burst));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.push(burstManager);
          }

          await Promise.all(promise);
        } //地刺


        async generateSpikes() {
          const promise = [];

          for (let i = 0; i < this.level.spikes.length; i++) {
            const spikes = this.level.spikes[i]; //生成木骷髅

            const node = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            node.setParent(this.stage);
            const spikesManager = node.addComponent(_crd && SpikesManager === void 0 ? (_reportPossibleCrUseOfSpikesManager({
              error: Error()
            }), SpikesManager) : SpikesManager);
            promise.push(spikesManager.init(spikes));
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.push(spikesManager);
          }

          await Promise.all(promise);
        }

        async generateSmokeLayer() {
          this.smokeLayer = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
            error: Error()
          }), createUINode) : createUINode)();
          this.smokeLayer.setParent(this.stage);
        } //生成烟雾


        async generateSmoke(x, y, direction) {
          //缓存池
          const item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
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
            const smoke = (_crd && createUINode === void 0 ? (_reportPossibleCrUseOfcreateUINode({
              error: Error()
            }), createUINode) : createUINode)();
            smoke.setParent(this.smokeLayer);
            const smokeManager = smoke.addComponent(_crd && SmokeManager === void 0 ? (_reportPossibleCrUseOfSmokeManager({
              error: Error()
            }), SmokeManager) : SmokeManager);
            await smokeManager.init({
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
        } //瓦片地图适配屏幕


        adaptPos() {
          const {
            mapRowCount,
            mapColumnCount
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const disX = (_crd && TILE_WIDTH === void 0 ? (_reportPossibleCrUseOfTILE_WIDTH({
            error: Error()
          }), TILE_WIDTH) : TILE_WIDTH) * mapRowCount / 2;
          const disY = (_crd && TILE_HEIGHT === void 0 ? (_reportPossibleCrUseOfTILE_HEIGHT({
            error: Error()
          }), TILE_HEIGHT) : TILE_HEIGHT) * mapColumnCount / 2 + 80;
          this.stage.getComponent(_crd && ShakeManager === void 0 ? (_reportPossibleCrUseOfShakeManager({
            error: Error()
          }), ShakeManager) : ShakeManager).stop();
          this.stage.setPosition(-disX, disY);
        } //保存数据 -> 记录玩家移动数据


        record() {
          const item = {
            player: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.y,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.direction,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.type,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH ? (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.player.state : (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE
            },
            door: {
              x: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.x,
              y: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.y,
              direction: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.direction,
              type: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.type,
              state: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.door.state
            },
            enemies: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.map(({
              x,
              y,
              direction,
              type,
              state
            }) => ({
              x,
              y,
              direction,
              type,
              state
            })),
            bursts: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.map(({
              x,
              y,
              direction,
              type,
              state
            }) => ({
              x,
              y,
              direction,
              type,
              state
            })),
            spikes: (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.map(({
              x,
              y,
              count,
              type
            }) => ({
              x,
              y,
              count,
              type
            }))
          };
          (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.push(item);
        } //撤回


        revoke() {
          const item = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.records.pop();

          if (item) {
            //疑问
            // DataManager.Instance.player = item.player
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.x = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetX = item.player.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.y = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.targetY = item.player.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.direction = item.player.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.player.state = item.player.state;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.x = item.door.x;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.y = item.door.y;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.direction = item.door.direction;
            (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.door.state = item.door.state;

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.enemies.length; i++) {
              // const enemy = DataManager.Instance.enemies[i];
              const enemy = item.enemies[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i].x = enemy.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i].y = enemy.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i].type = enemy.type;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i].direction = enemy.direction;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.enemies[i].state = enemy.state;
            }

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.bursts.length; i++) {
              const burst = item.bursts[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[i].x = burst.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[i].y = burst.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[i].type = burst.type;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.bursts[i].state = burst.state;
            }

            for (let i = 0; i < (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
              error: Error()
            }), DataManager) : DataManager).Instance.spikes.length; i++) {
              const one = item.spikes[i];
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].x = one.x;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].y = one.y;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].type = one.type;
              (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
                error: Error()
              }), DataManager) : DataManager).Instance.spikes[i].count = one.count;
            }
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BattleManager.js.map