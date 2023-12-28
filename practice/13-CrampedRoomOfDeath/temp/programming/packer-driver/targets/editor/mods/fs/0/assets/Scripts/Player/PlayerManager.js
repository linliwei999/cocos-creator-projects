System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, EventManager, PlayerStateMachine, EntityManager, DataManager, _dec, _class, _temp, _crd, ccclass, property, ANIMATION_SPEED, PlayerManager;

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

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
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
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
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
        constructor(...args) {
          super(...args);

          _defineProperty(this, "targetX", 0);

          _defineProperty(this, "targetY", 0);

          _defineProperty(this, "speed", ANIMATION_SPEED);
        }

        async init() {
          this.fsm = this.node.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine);
          await this.fsm.init();
          super.init({
            x: 2,
            y: 8,
            type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).PLAYER,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE
          });
          this.targetX = this.x;
          this.targetY = this.y;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, this.inputHandle, this);
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

          if (Math.abs(this.targetX - this.x) < -0.1 && Math.abs(this.targetY - this.y) < -0.1) {
            this.x = this.targetX;
            this.y = this.targetY;
          }
        }

        inputHandle(inputDirection) {
          if (this.willBlock(inputDirection)) {
            console.log('撞墙');
            return;
          }

          this.move(inputDirection);
        }

        willBlock(inputDirection) {
          const {
            targetX: x,
            targetY: y,
            direction
          } = this;
          const {
            tileInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;

          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //疑问
              const playerNextY = y - 1;
              const weaponNextY = y - 2; //玩家走出地图

              if (playerNextY <= 1) {
                return true;
              } //下一个瓦片


              const playerTile = tileInfo[x][playerNextY];
              const weaponTile = tileInfo[x][weaponNextY];

              if (playerTile && playerTile.moveable && (!weaponTile || weaponTile.turnable)) {//empty
              } else {
                return true;
              }
            }
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT) {
            let nextX;
            let nextY;

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
            }

            if ((!tileInfo[x][nextY] || tileInfo[x][nextY].turnable) && (!tileInfo[nextX][y] || tileInfo[nextX][y].turnable) && (!tileInfo[nextX][nextY] || tileInfo[nextX][nextY].turnable)) {//empty
            } else {
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
          }
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