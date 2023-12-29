System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, EVENT_ENUM, SHAKE_TYPE_ENUM, EventManager, PlayerStateMachine, EntityManager, DataManager, _dec, _class, _temp, _crd, ccclass, property, ANIMATION_SPEED, PlayerManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfCONTROLLER_ENUM(extras) {
    _reporterNs.report("CONTROLLER_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "db://assets/Runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "db://assets/Scripts/Player/PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "db://assets/Base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "db://assets/Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "db://assets/Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "db://assets/Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "db://assets/Scripts/Burst/BurstManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      CONTROLLER_ENUM = _unresolved_2.CONTROLLER_ENUM;
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      EVENT_ENUM = _unresolved_2.EVENT_ENUM;
      SHAKE_TYPE_ENUM = _unresolved_2.SHAKE_TYPE_ENUM;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      PlayerStateMachine = _unresolved_4.PlayerStateMachine;
    }, function (_unresolved_5) {
      EntityManager = _unresolved_5.EntityManager;
    }, function (_unresolved_6) {
      DataManager = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "efe8824aOFJmLvfxa9L9Ozm", "PlayerManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      ANIMATION_SPEED = 1 / 8;

      _export("PlayerManager", PlayerManager = (_dec = ccclass('PlayerManager'), _dec(_class = (_temp = class PlayerManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "targetX", 0);

          _defineProperty(this, "targetY", 0);

          _defineProperty(this, "isMoving", false);

          _defineProperty(this, "speed", ANIMATION_SPEED);
        }

        // private testAttackCount = 0
        init(params) {
          var _superprop_getInit = () => super.init,
              _this = this;

          return _asyncToGenerator(function* () {
            _this.fsm = _this.node.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
              error: Error()
            }), PlayerStateMachine) : PlayerStateMachine);
            yield _this.fsm.init();

            _superprop_getInit().call(_this, params);

            _this.targetX = _this.x;
            _this.targetY = _this.y;
            ;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, _this.inputHandle, _this);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, _this.onDied, _this);
          })();
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, this.inputHandle);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, this.onDied);
        }

        updateXY() {
          if (this.targetX < this.x) {
            this.x -= this.speed;
          } else if (this.targetX > this.x) {
            this.x += this.speed;
          }

          if (this.targetY < this.y) {
            this.y -= this.speed;
          } else if (this.targetY > this.y) {
            this.y += this.speed;
          }

          if (Math.abs(this.targetX - this.x) < 0.1 && Math.abs(this.targetY - this.y) < 0.1 && this.isMoving) {
            this.x = this.targetX;
            this.y = this.targetY;
            this.isMoving = false;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          }
        }

        inputHandle(inputDirection) {
          //攻击
          var enemyId = this.willAttack(inputDirection);

          if (enemyId) {
            return;
          }

          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
            return;
          }

          if (this.willBlock(inputDirection)) {
            // console.log('撞墙');
            if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            }

            return;
          }

          this.move(inputDirection);
        }

        onAttack(enemyId) {
          if (enemyId) {
            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).ATTACK_ENEMY, enemyId);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).DOOR_OPEN);
          }

          return enemyId;
        }

        willAttack(inputDirection) {
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(item => item.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          for (var i = 0; i < enemies.length; i++) {
            var {
              x: enemyX,
              y: enemyY,
              id: enemyId,
              state: enemyState
            } = enemies[i];

            if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP && enemyX === this.x && enemyY === this.targetY - 2) {
              console.log('玩家攻击');
              return this.onAttack(enemyId);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT && enemyX === this.targetX - 2 && enemyY === this.y) {
              return this.onAttack(enemyId);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT && enemyX === this.targetX + 2 && enemyY === this.y) {
              // this.testAttackCount++
              // if(this.testAttackCount === 3){
              //     return false;
              // }
              return this.onAttack(enemyId);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM && enemyX === this.x && enemyY === this.targetY + 2) {
              return this.onAttack(enemyId);
            } else {
              return '';
            }
          }
        }

        willBlockMy(inputDirection) {
          var {
            targetX: x,
            targetY: y,
            direction
          } = this; // console.log('this', this);

          var {
            tileInfo,
            door: {
              x: doorX,
              y: doorY,
              state: doorState
            }
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(item => item.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          var bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(item => item.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH); //按钮方向-向上

          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //疑问
              var playerNextY = y - 1;
              var weaponNextY = y - 2; //玩家走出地图

              if (playerNextY <= 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //下一个瓦片


              var playerTile = tileInfo[x][playerNextY];
              var weaponTile = tileInfo[x][weaponNextY]; //门的碰撞

              if ((x === doorX && playerNextY === doorY || x === doorX && weaponNextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //敌人的碰撞


              for (var i = 0; i < enemies.length; i++) {
                var {
                  x: enemyX,
                  y: enemyY,
                  id: enemyId,
                  state: enemyState
                } = enemies[i];

                if (x === enemyX && playerNextY === enemyY || x === enemyX && weaponNextY === enemyY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //地裂的碰撞


              for (var _i = 0; _i < bursts.length; _i++) {
                var {
                  x: burstX,
                  y: burstY,
                  id: burstId,
                  state: burstState
                } = bursts[_i];

                if (x === burstX && playerNextY === burstY || x === burstX && weaponNextY === burstY) {
                  return false;
                }
              }

              if (playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)) {//empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              //左方向移动
              var _playerNextY = y - 1;

              var weaponNextX = x - 1;
              var _weaponNextY = _playerNextY; //下一个瓦片

              var _playerTile = tileInfo[x][_playerNextY];
              var _weaponTile = tileInfo[weaponNextX][_weaponNextY];

              if ((_playerTile === null || _playerTile === void 0 ? void 0 : _playerTile.moveable) && _weaponTile.moveable) {//empty
              } else {
                return true;
              }
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              //右方向移动
              var _playerNextY2 = y - 1;

              var _weaponNextX = x + 1;

              var _weaponNextY2 = _playerNextY2; //下一个瓦片

              var _playerTile2 = tileInfo[x][_playerNextY2];
              var _weaponTile2 = tileInfo[_weaponNextX][_weaponNextY2];

              if ((_playerTile2 === null || _playerTile2 === void 0 ? void 0 : _playerTile2.moveable) && _weaponTile2.moveable) {//empty
              } else {
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            var nextX;
            var nextY; // console.log('direction', direction)

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              nextX = x - 1;
              nextY = y - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextX = x + 1;
              nextY = y + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextX = x - 1;
              nextY = y + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextX = x + 1;
              nextY = y - 1;
            } //门的碰撞


            if ((x === doorX && nextY === doorY || nextX === doorX && y === doorY || nextX === doorX && nextY === doorY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //敌人的碰撞


            for (var _i2 = 0; _i2 < enemies.length; _i2++) {
              var {
                x: _enemyX,
                y: _enemyY,
                id: _enemyId,
                state: _enemyState
              } = enemies[_i2];

              if (x === _enemyX && nextY === _enemyY || x === _enemyX && y === _enemyY || nextX === _enemyX && nextY === _enemyY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
            } //判断地图元素
            // console.log('tileInfo', tileInfo)
            // console.log('x', x)
            // console.log('nextX', nextX)
            // console.log('y', y)
            // console.log('nextY', nextY)


            if ((!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)) {//empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            }
          }

          return false;
        }

        willBlock(type) {
          var {
            targetX: x,
            targetY: y,
            direction
          } = this;
          var {
            tileInfo: tileInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          var enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          var {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door || {};
          var bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          var {
            mapRowCount: row,
            mapColumnCount: column
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance; //按钮方向——向上

          if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            var playerNextY = y - 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$x, _tileInfo$x2;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var weaponNextY = y - 2;
              var nextPlayerTile = (_tileInfo$x = tileInfo[x]) === null || _tileInfo$x === void 0 ? void 0 : _tileInfo$x[playerNextY];
              var nextWeaponTile = (_tileInfo$x2 = tileInfo[x]) === null || _tileInfo$x2 === void 0 ? void 0 : _tileInfo$x2[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // 判断敌人


              for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];
                var {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === weaponNextY || enemyX === x && enemyY === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$x3, _tileInfo$x4;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY3 = y;

              var _nextPlayerTile = (_tileInfo$x3 = tileInfo[x]) === null || _tileInfo$x3 === void 0 ? void 0 : _tileInfo$x3[playerNextY];

              var _nextWeaponTile = (_tileInfo$x4 = tileInfo[x]) === null || _tileInfo$x4 === void 0 ? void 0 : _tileInfo$x4[_weaponNextY3]; //判断门


              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === _weaponNextY3) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i3 = 0; _i3 < enemies.length; _i3++) {
                var _enemy = enemies[_i3];
                var {
                  x: _enemyX2,
                  y: _enemyY2
                } = _enemy;

                if (_enemyX2 === x && _enemyY2 === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile || _nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile && _nextPlayerTile.moveable && (!_nextWeaponTile || _nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$x5, _tileInfo$weaponNextX;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var weaponNextX = x - 1;

              var _weaponNextY4 = y - 1;

              var _nextPlayerTile2 = (_tileInfo$x5 = tileInfo[x]) === null || _tileInfo$x5 === void 0 ? void 0 : _tileInfo$x5[playerNextY];

              var _nextWeaponTile2 = (_tileInfo$weaponNextX = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX === void 0 ? void 0 : _tileInfo$weaponNextX[_weaponNextY4]; //判断门


              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === _weaponNextY4) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i4 = 0; _i4 < enemies.length; _i4++) {
                var _enemy2 = enemies[_i4];
                var {
                  x: _enemyX3,
                  y: _enemyY3
                } = _enemy2;

                if (_enemyX3 === x && _enemyY3 === playerNextY || _enemyX3 === weaponNextX && _enemyY3 === _weaponNextY4) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile2 || _nextWeaponTile2.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile2 && _nextPlayerTile2.moveable && (!_nextWeaponTile2 || _nextWeaponTile2.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$x6, _tileInfo$_weaponNext;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX2 = x + 1;

              var _weaponNextY5 = y - 1;

              var _nextPlayerTile3 = (_tileInfo$x6 = tileInfo[x]) === null || _tileInfo$x6 === void 0 ? void 0 : _tileInfo$x6[playerNextY];

              var _nextWeaponTile3 = (_tileInfo$_weaponNext = tileInfo[_weaponNextX2]) === null || _tileInfo$_weaponNext === void 0 ? void 0 : _tileInfo$_weaponNext[_weaponNextY5]; //判断门


              if ((doorX === x && doorY === playerNextY || doorX === _weaponNextX2 && doorY === _weaponNextY5) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i5 = 0; _i5 < enemies.length; _i5++) {
                var _enemy3 = enemies[_i5];
                var {
                  x: _enemyX4,
                  y: _enemyY4
                } = _enemy3;

                if (_enemyX4 === x && _enemyY4 === playerNextY || _enemyX4 === _weaponNextX2 && _enemyY4 === _weaponNextY5) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } // 判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!_nextWeaponTile3 || _nextWeaponTile3.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile3 && _nextPlayerTile3.moveable && (!_nextWeaponTile3 || _nextWeaponTile3.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }
            } //按钮方向——向下

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            var _playerNextY3 = y + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$x7, _tileInfo$x8;

              if (_playerNextY3 > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextY6 = y;

              var _nextPlayerTile4 = (_tileInfo$x7 = tileInfo[x]) === null || _tileInfo$x7 === void 0 ? void 0 : _tileInfo$x7[_playerNextY3];

              var _nextWeaponTile4 = (_tileInfo$x8 = tileInfo[x]) === null || _tileInfo$x8 === void 0 ? void 0 : _tileInfo$x8[_weaponNextY6]; //判断门


              if ((doorX === x && doorY === _playerNextY3 || doorX === x && doorY === _weaponNextY6) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i6 = 0; _i6 < enemies.length; _i6++) {
                var _enemy4 = enemies[_i6];
                var {
                  x: _enemyX5,
                  y: _enemyY5
                } = _enemy4;

                if (_enemyX5 === x && _enemyY5 === _playerNextY3) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } // 判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY3) && (!_nextWeaponTile4 || _nextWeaponTile4.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile4 && _nextPlayerTile4.moveable && (!_nextWeaponTile4 || _nextWeaponTile4.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$x9, _tileInfo$x10;

              if (_playerNextY3 > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextY7 = y + 2;

              var _nextPlayerTile5 = (_tileInfo$x9 = tileInfo[x]) === null || _tileInfo$x9 === void 0 ? void 0 : _tileInfo$x9[_playerNextY3];

              var _nextWeaponTile5 = (_tileInfo$x10 = tileInfo[x]) === null || _tileInfo$x10 === void 0 ? void 0 : _tileInfo$x10[_weaponNextY7]; //判断门


              if ((doorX === x && doorY === _playerNextY3 || doorX === x && doorY === _weaponNextY7) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // 判断敌人


              for (var _i7 = 0; _i7 < enemies.length; _i7++) {
                var _enemy5 = enemies[_i7];
                var {
                  x: _enemyX6,
                  y: _enemyY6
                } = _enemy5;

                if (_enemyX6 === x && _enemyY6 === _weaponNextY7 || _enemyX6 === x && _enemyY6 === _playerNextY3) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY3) && (!_nextWeaponTile5 || _nextWeaponTile5.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile5 && _nextPlayerTile5.moveable && (!_nextWeaponTile5 || _nextWeaponTile5.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$x11, _tileInfo$_weaponNext2;

              if (_playerNextY3 > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX3 = x - 1;

              var _weaponNextY8 = y + 1;

              var _nextPlayerTile6 = (_tileInfo$x11 = tileInfo[x]) === null || _tileInfo$x11 === void 0 ? void 0 : _tileInfo$x11[_playerNextY3];

              var _nextWeaponTile6 = (_tileInfo$_weaponNext2 = tileInfo[_weaponNextX3]) === null || _tileInfo$_weaponNext2 === void 0 ? void 0 : _tileInfo$_weaponNext2[_weaponNextY8]; //判断门


              if ((doorX === x && doorY === _playerNextY3 || doorX === _weaponNextX3 && doorY === _weaponNextY8) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i8 = 0; _i8 < enemies.length; _i8++) {
                var _enemy6 = enemies[_i8];
                var {
                  x: _enemyX7,
                  y: _enemyY7
                } = _enemy6;

                if (_enemyX7 === x && _enemyY7 === _playerNextY3 || _enemyX7 === _weaponNextX3 && _enemyY7 === _weaponNextY8) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY3) && (!_nextWeaponTile6 || _nextWeaponTile6.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile6 && _nextPlayerTile6.moveable && (!_nextWeaponTile6 || _nextWeaponTile6.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$x12, _tileInfo$_weaponNext3;

              if (_playerNextY3 > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX4 = x + 1;

              var _weaponNextY9 = y + 1;

              var _nextPlayerTile7 = (_tileInfo$x12 = tileInfo[x]) === null || _tileInfo$x12 === void 0 ? void 0 : _tileInfo$x12[_playerNextY3];

              var _nextWeaponTile7 = (_tileInfo$_weaponNext3 = tileInfo[_weaponNextX4]) === null || _tileInfo$_weaponNext3 === void 0 ? void 0 : _tileInfo$_weaponNext3[_weaponNextY9]; //判断门


              if ((doorX === x && doorY === _playerNextY3 || doorX === _weaponNextX4 && doorY === _weaponNextY9) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i9 = 0; _i9 < enemies.length; _i9++) {
                var _enemy7 = enemies[_i9];
                var {
                  x: _enemyX8,
                  y: _enemyY8
                } = _enemy7;

                if (_enemyX8 === x && _enemyY8 === _playerNextY3 || _enemyX8 === _weaponNextX4 && _enemyY8 === _weaponNextY9) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === _playerNextY3) && (!_nextWeaponTile7 || _nextWeaponTile7.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile7 && _nextPlayerTile7.moveable && (!_nextWeaponTile7 || _nextWeaponTile7.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            } //按钮方向——向左

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            var playerNextX = x - 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$playerNextX, _tileInfo$_weaponNext4;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX5 = x - 1;

              var _weaponNextY10 = y - 1;

              var _nextPlayerTile8 = (_tileInfo$playerNextX = tileInfo[playerNextX]) === null || _tileInfo$playerNextX === void 0 ? void 0 : _tileInfo$playerNextX[y];

              var _nextWeaponTile8 = (_tileInfo$_weaponNext4 = tileInfo[_weaponNextX5]) === null || _tileInfo$_weaponNext4 === void 0 ? void 0 : _tileInfo$_weaponNext4[_weaponNextY10]; //判断门


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX5 && doorY === _weaponNextY10) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i10 = 0; _i10 < enemies.length; _i10++) {
                var _enemy8 = enemies[_i10];
                var {
                  x: _enemyX9,
                  y: _enemyY9
                } = _enemy8;

                if (_enemyX9 === playerNextX && _enemyY9 === y || _enemyX9 === _weaponNextX5 && _enemyY9 === _weaponNextY10) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile8 || _nextWeaponTile8.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile8 && _nextPlayerTile8.moveable && (!_nextWeaponTile8 || _nextWeaponTile8.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX2, _tileInfo$_weaponNext5;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX6 = x - 1;

              var _weaponNextY11 = y + 1;

              var _nextPlayerTile9 = (_tileInfo$playerNextX2 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX2 === void 0 ? void 0 : _tileInfo$playerNextX2[y];

              var _nextWeaponTile9 = (_tileInfo$_weaponNext5 = tileInfo[_weaponNextX6]) === null || _tileInfo$_weaponNext5 === void 0 ? void 0 : _tileInfo$_weaponNext5[_weaponNextY11]; //判断门


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX6 && doorY === _weaponNextY11) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i11 = 0; _i11 < enemies.length; _i11++) {
                var _enemy9 = enemies[_i11];
                var {
                  x: _enemyX10,
                  y: _enemyY10
                } = _enemy9;

                if (_enemyX10 === playerNextX && _enemyY10 === y || _enemyX10 === _weaponNextX6 && _enemyY10 === _weaponNextY11) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile9 || _nextWeaponTile9.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile9 && _nextPlayerTile9.moveable && (!_nextWeaponTile9 || _nextWeaponTile9.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX3, _tileInfo$_weaponNext6;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX7 = x - 2;

              var _nextPlayerTile10 = (_tileInfo$playerNextX3 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX3 === void 0 ? void 0 : _tileInfo$playerNextX3[y];

              var _nextWeaponTile10 = (_tileInfo$_weaponNext6 = tileInfo[_weaponNextX7]) === null || _tileInfo$_weaponNext6 === void 0 ? void 0 : _tileInfo$_weaponNext6[y]; //判断门


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX7 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (var _i12 = 0; _i12 < enemies.length; _i12++) {
                var _enemy10 = enemies[_i12];
                var {
                  x: _enemyX11,
                  y: _enemyY11
                } = _enemy10;

                if (_enemyX11 === playerNextX && _enemyY11 === y || _enemyX11 === _weaponNextX7 && _enemyY11 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile10 || _nextWeaponTile10.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile10 && _nextPlayerTile10.moveable && (!_nextWeaponTile10 || _nextWeaponTile10.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX4, _tileInfo$_weaponNext7;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX8 = x;

              var _nextPlayerTile11 = (_tileInfo$playerNextX4 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX4 === void 0 ? void 0 : _tileInfo$playerNextX4[y];

              var _nextWeaponTile11 = (_tileInfo$_weaponNext7 = tileInfo[_weaponNextX8]) === null || _tileInfo$_weaponNext7 === void 0 ? void 0 : _tileInfo$_weaponNext7[y]; //判断门


              if ((doorX === playerNextX && doorY === y || doorX === _weaponNextX8 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i13 = 0; _i13 < enemies.length; _i13++) {
                var _enemy11 = enemies[_i13];
                var {
                  x: _enemyX12,
                  y: _enemyY12
                } = _enemy11;

                if (_enemyX12 === playerNextX && _enemyY12 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!_nextWeaponTile11 || _nextWeaponTile11.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile11 && _nextPlayerTile11.moveable && (!_nextWeaponTile11 || _nextWeaponTile11.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }
            } //按钮方向——向右

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            var _playerNextX = x + 1; //玩家方向——向上


            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$_playerNext, _tileInfo$_weaponNext8;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              var _weaponNextX9 = x + 1;

              var _weaponNextY12 = y - 1;

              var _nextPlayerTile12 = (_tileInfo$_playerNext = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext === void 0 ? void 0 : _tileInfo$_playerNext[y];

              var _nextWeaponTile12 = (_tileInfo$_weaponNext8 = tileInfo[_weaponNextX9]) === null || _tileInfo$_weaponNext8 === void 0 ? void 0 : _tileInfo$_weaponNext8[_weaponNextY12]; //判断门


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX9 && doorY === _weaponNextY12) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (var _i14 = 0; _i14 < enemies.length; _i14++) {
                var _enemy12 = enemies[_i14];
                var {
                  x: _enemyX13,
                  y: _enemyY13
                } = _enemy12;

                if (_enemyX13 === _playerNextX && _enemyY13 === y || _enemyX13 === _weaponNextX9 && _enemyY13 === _weaponNextY12) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile12 || _nextWeaponTile12.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile12 && _nextPlayerTile12.moveable && (!_nextWeaponTile12 || _nextWeaponTile12.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$_playerNext2, _tileInfo$_weaponNext9;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              var _weaponNextX10 = x + 1;

              var _weaponNextY13 = y + 1;

              var _nextPlayerTile13 = (_tileInfo$_playerNext2 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext2 === void 0 ? void 0 : _tileInfo$_playerNext2[y];

              var _nextWeaponTile13 = (_tileInfo$_weaponNext9 = tileInfo[_weaponNextX10]) === null || _tileInfo$_weaponNext9 === void 0 ? void 0 : _tileInfo$_weaponNext9[_weaponNextY13]; //判断门


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX10 && doorY === _weaponNextY13) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (var _i15 = 0; _i15 < enemies.length; _i15++) {
                var _enemy13 = enemies[_i15];
                var {
                  x: _enemyX14,
                  y: _enemyY14
                } = _enemy13;

                if (_enemyX14 === _playerNextX && _enemyY14 === y || _enemyX14 === _weaponNextX10 && _enemyY14 === _weaponNextY13) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile13 || _nextWeaponTile13.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile13 && _nextPlayerTile13.moveable && (!_nextWeaponTile13 || _nextWeaponTile13.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$_playerNext3, _tileInfo$_weaponNext10;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              var _weaponNextX11 = x;

              var _nextPlayerTile14 = (_tileInfo$_playerNext3 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext3 === void 0 ? void 0 : _tileInfo$_playerNext3[y];

              var _nextWeaponTile14 = (_tileInfo$_weaponNext10 = tileInfo[_weaponNextX11]) === null || _tileInfo$_weaponNext10 === void 0 ? void 0 : _tileInfo$_weaponNext10[y]; //判断门


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX11 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (var _i16 = 0; _i16 < enemies.length; _i16++) {
                var _enemy14 = enemies[_i16];
                var {
                  x: _enemyX15,
                  y: _enemyY15
                } = _enemy14;

                if (_enemyX15 === _playerNextX && _enemyY15 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile14 || _nextWeaponTile14.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile14 && _nextPlayerTile14.moveable && (!_nextWeaponTile14 || _nextWeaponTile14.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$_playerNext4, _tileInfo$_weaponNext11;

              if (_playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              var _weaponNextX12 = x + 2;

              var _nextPlayerTile15 = (_tileInfo$_playerNext4 = tileInfo[_playerNextX]) === null || _tileInfo$_playerNext4 === void 0 ? void 0 : _tileInfo$_playerNext4[y];

              var _nextWeaponTile15 = (_tileInfo$_weaponNext11 = tileInfo[_weaponNextX12]) === null || _tileInfo$_weaponNext11 === void 0 ? void 0 : _tileInfo$_weaponNext11[y]; //判断门


              if ((doorX === _playerNextX && doorY === y || doorX === _weaponNextX12 && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (var _i17 = 0; _i17 < enemies.length; _i17++) {
                var _enemy15 = enemies[_i17];
                var {
                  x: _enemyX16,
                  y: _enemyY16
                } = _enemy15;

                if (_enemyX16 === _playerNextX && _enemyY16 === y || _enemyX16 === _weaponNextX12 && _enemyY16 === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === _playerNextX && burst.y === y) && (!_nextWeaponTile15 || _nextWeaponTile15.turnable)) {
                return false;
              } //最后判断地图元素


              if (_nextPlayerTile15 && _nextPlayerTile15.moveable && (!_nextWeaponTile15 || _nextWeaponTile15.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }
            } //按钮方向——左转

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            var _tileInfo$x13, _tileInfo$x14, _tileInfo$nextX, _tileInfo$nextX2, _tileInfo$nextX3, _tileInfo$nextX4;

            var nextY, nextX;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //朝上左转的话，左上角三个tile都必须turnable为true，并且没有敌人
              nextY = y - 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextY = y + 1;
              nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextY = y + 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextY = y - 1;
              nextX = x + 1;
            } //判断门


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //判断敌人


            for (var _i18 = 0; _i18 < enemies.length; _i18++) {
              var _enemy16 = enemies[_i18];
              var {
                x: _enemyX17,
                y: _enemyY17
              } = _enemy16;

              if (_enemyX17 === nextX && _enemyY17 === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (_enemyX17 === nextX && _enemyY17 === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (_enemyX17 === x && _enemyY17 === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              }
            } //最后判断地图元素


            if ((!((_tileInfo$x13 = tileInfo[x]) === null || _tileInfo$x13 === void 0 ? void 0 : _tileInfo$x13[nextY]) || ((_tileInfo$x14 = tileInfo[x]) === null || _tileInfo$x14 === void 0 ? void 0 : _tileInfo$x14[nextY].turnable)) && (!((_tileInfo$nextX = tileInfo[nextX]) === null || _tileInfo$nextX === void 0 ? void 0 : _tileInfo$nextX[y]) || ((_tileInfo$nextX2 = tileInfo[nextX]) === null || _tileInfo$nextX2 === void 0 ? void 0 : _tileInfo$nextX2[y].turnable)) && (!((_tileInfo$nextX3 = tileInfo[nextX]) === null || _tileInfo$nextX3 === void 0 ? void 0 : _tileInfo$nextX3[nextY]) || ((_tileInfo$nextX4 = tileInfo[nextX]) === null || _tileInfo$nextX4 === void 0 ? void 0 : _tileInfo$nextX4[nextY].turnable))) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            } //按钮方向——右转

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT) {
            var _tileInfo$x15, _tileInfo$x16, _tileInfo$_nextX, _tileInfo$_nextX2, _tileInfo$_nextX3, _tileInfo$_nextX4;

            var _nextX, _nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //朝上右转的话，右上角三个tile都必须turnable为true
              _nextY = y - 1;
              _nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              _nextY = y + 1;
              _nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              _nextY = y - 1;
              _nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              _nextY = y + 1;
              _nextX = x + 1;
            } //判断门


            if ((doorX === x && doorY === _nextY || doorX === _nextX && doorY === y || doorX === _nextX && doorY === _nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断敌人


            for (var _i19 = 0; _i19 < enemies.length; _i19++) {
              var _enemy17 = enemies[_i19];
              var {
                x: _enemyX18,
                y: _enemyY18
              } = _enemy17;

              if (_enemyX18 === _nextX && _enemyY18 === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX18 === _nextX && _enemyY18 === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (_enemyX18 === x && _enemyY18 === _nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            } //最后判断地图元素


            if ((!((_tileInfo$x15 = tileInfo[x]) === null || _tileInfo$x15 === void 0 ? void 0 : _tileInfo$x15[_nextY]) || ((_tileInfo$x16 = tileInfo[x]) === null || _tileInfo$x16 === void 0 ? void 0 : _tileInfo$x16[_nextY].turnable)) && (!((_tileInfo$_nextX = tileInfo[_nextX]) === null || _tileInfo$_nextX === void 0 ? void 0 : _tileInfo$_nextX[y]) || ((_tileInfo$_nextX2 = tileInfo[_nextX]) === null || _tileInfo$_nextX2 === void 0 ? void 0 : _tileInfo$_nextX2[y].turnable)) && (!((_tileInfo$_nextX3 = tileInfo[_nextX]) === null || _tileInfo$_nextX3 === void 0 ? void 0 : _tileInfo$_nextX3[_nextY]) || ((_tileInfo$_nextX4 = tileInfo[_nextX]) === null || _tileInfo$_nextX4 === void 0 ? void 0 : _tileInfo$_nextX4[_nextY].turnable))) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            }
          }

          return false;
        } //生成移动烟雾


        showSmoke(direction) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.x, this.y, direction);
        } //玩家移动


        move(inputDirection) {
          console.log('inputDirection', inputDirection);

          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            this.targetY -= 1;
            this.showSmoke(inputDirection);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            this.targetY += 1;
            this.showSmoke(inputDirection);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            this.targetX -= 1;
            this.showSmoke(inputDirection);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            this.targetX += 1;
            this.showSmoke(inputDirection);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
            }

            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNLEFT;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT) {
            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
            }

            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).TURNRIGHT;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
          }

          if (!(inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT || inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT)) {
            this.isMoving = true; // EventManager.Instance.emit(EVENT_ENUM.PLAYER_MOVE_END);
          }
        }

        onDied(type) {
          this.state = type;
        }

        update() {
          this.updateXY();
          super.update();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerManager.js.map