System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, EVENT_ENUM, EventManager, PlayerStateMachine, EntityManager, DataManager, _dec, _class, _temp, _crd, ccclass, property, ANIMATION_SPEED, PlayerManager;

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
            console.log('撞墙');
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

        willBlock(inputDirection) {
          var {
            targetX: x,
            targetY: y,
            direction
          } = this;
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
            var nextY;

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


            if ((!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)) {//empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
              return true;
            }
          }

          return false;
        } //玩家移动


        move(inputDirection) {
          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            this.targetY -= 1;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            this.targetY += 1;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            this.targetX -= 1;
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            this.targetX += 1;
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