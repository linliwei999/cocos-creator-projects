System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EventManager, CONTROLLER_ENUM, DIRECTION_ENUM, ENTITY_STATE_ENUM, EVENT_ENUM, SHAKE_TYPE_ENUM, DataManager, EntityManager, PlayerStateMachine, _dec, _class, _temp, _crd, ccclass, PlayerManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../Runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCONTROLLER_ENUM(extras) {
    _reporterNs.report("CONTROLLER_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDIRECTION_ENUM(extras) {
    _reporterNs.report("DIRECTION_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfENTITY_STATE_ENUM(extras) {
    _reporterNs.report("ENTITY_STATE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSHAKE_TYPE_ENUM(extras) {
    _reporterNs.report("SHAKE_TYPE_ENUM", "../../Enum", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataManager(extras) {
    _reporterNs.report("DataManager", "../../Runtime/DataManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "../../Base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEntity(extras) {
    _reporterNs.report("IEntity", "../../Levels", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerStateMachine(extras) {
    _reporterNs.report("PlayerStateMachine", "./PlayerStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../../Base/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBurstManager(extras) {
    _reporterNs.report("BurstManager", "../Burst/BurstManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      CONTROLLER_ENUM = _unresolved_3.CONTROLLER_ENUM;
      DIRECTION_ENUM = _unresolved_3.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_3.ENTITY_STATE_ENUM;
      EVENT_ENUM = _unresolved_3.EVENT_ENUM;
      SHAKE_TYPE_ENUM = _unresolved_3.SHAKE_TYPE_ENUM;
    }, function (_unresolved_4) {
      DataManager = _unresolved_4.default;
    }, function (_unresolved_5) {
      EntityManager = _unresolved_5.EntityManager;
    }, function (_unresolved_6) {
      PlayerStateMachine = _unresolved_6.PlayerStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d061bV0s7dMvL4lQmXdfLpY", "PlayerManager", undefined);

      ({
        ccclass
      } = _decorator);

      _export("PlayerManager", PlayerManager = (_dec = ccclass('PlayerManager'), _dec(_class = (_temp = class PlayerManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "speed", 1 / 10);

          _defineProperty(this, "targetX", void 0);

          _defineProperty(this, "targetY", void 0);

          _defineProperty(this, "isMoving", false);
        }

        async init(params) {
          this.fsm = this.addComponent(_crd && PlayerStateMachine === void 0 ? (_reportPossibleCrUseOfPlayerStateMachine({
            error: Error()
          }), PlayerStateMachine) : PlayerStateMachine);
          await this.fsm.init();
          super.init(params);
          this.targetX = this.x;
          this.targetY = this.y;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, this.inputProcess, this);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, this.onDead, this);
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).PLAYER_CTRL, this.inputProcess);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).ATTACK_PLAYER, this.onDead);
        }

        update() {
          this.updateXY();
          super.update();
        }

        updateXY() {
          //逼近targetX
          if (this.targetX < this.x) {
            this.x -= this.speed;
          } else if (this.targetX > this.x) {
            this.x += this.speed;
          } //逼近targetY


          if (this.targetY < this.y) {
            this.y -= this.speed;
          } else if (this.targetY > this.y) {
            this.y += this.speed;
          } //两者近似就触发结束


          if (Math.abs(this.targetX - this.x) < 0.01 && Math.abs(this.targetY - this.y) < 0.01 && this.isMoving) {
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

        onDead(type) {
          this.state = type;
        }

        onAttackShake(type) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, type);
        }

        inputProcess(inputDirection) {
          if (this.isMoving) {
            return;
          }

          if (this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).AIRDEATH || this.state === (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK) {
            return;
          }

          const id = this.willAttack(inputDirection);

          if (id) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP);
            this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).ATTACK;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).ATTACK_ENEMY, id);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).PLAYER_MOVE_END);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
              error: Error()
            }), EVENT_ENUM) : EVENT_ENUM).DOOR_OPEN);
            return;
          }

          if (this.willBlock(inputDirection)) {
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
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNLEFT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).RIGHT);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).TOP);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).LEFT);
            } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TURNRIGHT && this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
                error: Error()
              }), EVENT_ENUM) : EVENT_ENUM).SCREEN_SHAKE, (_crd && SHAKE_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfSHAKE_TYPE_ENUM({
                error: Error()
              }), SHAKE_TYPE_ENUM) : SHAKE_TYPE_ENUM).BOTTOM);
            }

            return;
          }

          this.move(inputDirection);
        }

        move(inputDirection) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).RECORD_STEP);

          if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            this.targetY -= 1;
            this.isMoving = true;
            this.showSmoke((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM) {
            this.targetY += 1;
            this.isMoving = true;
            this.showSmoke((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            this.targetX -= 1;
            this.isMoving = true;
            this.showSmoke((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT);
          } else if (inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT) {
            this.targetX += 1;
            this.isMoving = true;
            this.showSmoke((_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT);
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
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM;
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
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              this.direction = (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
                error: Error()
              }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP;
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
        }

        showSmoke(type) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).SHOW_SMOKE, this.x, this.y, type);
        }

        willAttack(inputDirection) {
          const enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);

          for (let i = 0; i < enemies.length; i++) {
            const enemy = enemies[i];
            const {
              x: enemyX,
              y: enemyY,
              id: enemyId
            } = enemy;

            if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP && enemyY === this.targetY - 2 && enemyX === this.x) {
              return enemyId;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).BOTTOM && enemyY === this.targetY + 2 && enemyX === this.x) {
              return enemyId;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT && enemyX === this.targetX - 2 && enemyY === this.y) {
              return enemyId;
            } else if (this.direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT && inputDirection === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
              error: Error()
            }), CONTROLLER_ENUM) : CONTROLLER_ENUM).RIGHT && enemyX === this.targetX + 2 && enemyY === this.y) {
              return enemyId;
            }
          }

          return '';
        }

        willBlock(type) {
          const {
            targetX: x,
            targetY: y,
            direction
          } = this;
          const {
            tileInfo: tileInfo
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance;
          const enemies = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.enemies.filter(enemy => enemy.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          const {
            x: doorX,
            y: doorY,
            state: doorState
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.door || {};
          const bursts = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance.bursts.filter(burst => burst.state !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
            error: Error()
          }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH);
          const {
            mapRowCount: row,
            mapColumnCount: column
          } = (_crd && DataManager === void 0 ? (_reportPossibleCrUseOfDataManager({
            error: Error()
          }), DataManager) : DataManager).Instance; //按钮方向——向上

          if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).TOP) {
            const playerNextY = y - 1; //玩家方向——向上

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

              const weaponNextY = y - 2;
              const nextPlayerTile = (_tileInfo$x = tileInfo[x]) === null || _tileInfo$x === void 0 ? void 0 : _tileInfo$x[playerNextY];
              const nextWeaponTile = (_tileInfo$x2 = tileInfo[x]) === null || _tileInfo$x2 === void 0 ? void 0 : _tileInfo$x2[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // 判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
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

              const weaponNextY = y;
              const nextPlayerTile = (_tileInfo$x3 = tileInfo[x]) === null || _tileInfo$x3 === void 0 ? void 0 : _tileInfo$x3[playerNextY];
              const nextWeaponTile = (_tileInfo$x4 = tileInfo[x]) === null || _tileInfo$x4 === void 0 ? void 0 : _tileInfo$x4[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
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

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$x5 = tileInfo[x]) === null || _tileInfo$x5 === void 0 ? void 0 : _tileInfo$x5[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX === void 0 ? void 0 : _tileInfo$weaponNextX[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
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
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$x6, _tileInfo$weaponNextX2;

              //判断是否超出地图
              if (playerNextY < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$x6 = tileInfo[x]) === null || _tileInfo$x6 === void 0 ? void 0 : _tileInfo$x6[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX2 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX2 === void 0 ? void 0 : _tileInfo$weaponNextX2[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } // 判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
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
            const playerNextY = y + 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$x7, _tileInfo$x8;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextY = y;
              const nextPlayerTile = (_tileInfo$x7 = tileInfo[x]) === null || _tileInfo$x7 === void 0 ? void 0 : _tileInfo$x7[playerNextY];
              const nextWeaponTile = (_tileInfo$x8 = tileInfo[x]) === null || _tileInfo$x8 === void 0 ? void 0 : _tileInfo$x8[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } // 判断地裂陷阱


              if (bursts.some(burst => burst.x === x && burst.y === playerNextY) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
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

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextY = y + 2;
              const nextPlayerTile = (_tileInfo$x9 = tileInfo[x]) === null || _tileInfo$x9 === void 0 ? void 0 : _tileInfo$x9[playerNextY];
              const nextWeaponTile = (_tileInfo$x10 = tileInfo[x]) === null || _tileInfo$x10 === void 0 ? void 0 : _tileInfo$x10[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === x && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } // 判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
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
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$x11, _tileInfo$weaponNextX3;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$x11 = tileInfo[x]) === null || _tileInfo$x11 === void 0 ? void 0 : _tileInfo$x11[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX3 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX3 === void 0 ? void 0 : _tileInfo$weaponNextX3[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
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
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$x12, _tileInfo$weaponNextX4;

              if (playerNextY > column - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$x12 = tileInfo[x]) === null || _tileInfo$x12 === void 0 ? void 0 : _tileInfo$x12[playerNextY];
              const nextWeaponTile = (_tileInfo$weaponNextX4 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX4 === void 0 ? void 0 : _tileInfo$weaponNextX4[weaponNextY]; //判断门

              if ((doorX === x && doorY === playerNextY || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === x && enemyY === playerNextY || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
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
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }
            } //按钮方向——向左

          } else if (type === (_crd && CONTROLLER_ENUM === void 0 ? (_reportPossibleCrUseOfCONTROLLER_ENUM({
            error: Error()
          }), CONTROLLER_ENUM) : CONTROLLER_ENUM).LEFT) {
            const playerNextX = x - 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$playerNextX, _tileInfo$weaponNextX5;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$playerNextX = tileInfo[playerNextX]) === null || _tileInfo$playerNextX === void 0 ? void 0 : _tileInfo$playerNextX[y];
              const nextWeaponTile = (_tileInfo$weaponNextX5 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX5 === void 0 ? void 0 : _tileInfo$weaponNextX5[weaponNextY]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX2, _tileInfo$weaponNextX6;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x - 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$playerNextX2 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX2 === void 0 ? void 0 : _tileInfo$playerNextX2[y];
              const nextWeaponTile = (_tileInfo$weaponNextX6 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX6 === void 0 ? void 0 : _tileInfo$weaponNextX6[weaponNextY]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX3, _tileInfo$weaponNextX7;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x - 2;
              const nextPlayerTile = (_tileInfo$playerNextX3 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX3 === void 0 ? void 0 : _tileInfo$playerNextX3[y];
              const nextWeaponTile = (_tileInfo$weaponNextX7 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX7 === void 0 ? void 0 : _tileInfo$weaponNextX7[y]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX4, _tileInfo$weaponNextX8;

              //判断是否超出地图
              if (playerNextX < 0) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileInfo$playerNextX4 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX4 === void 0 ? void 0 : _tileInfo$playerNextX4[y];
              const nextWeaponTile = (_tileInfo$weaponNextX8 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX8 === void 0 ? void 0 : _tileInfo$weaponNextX8[y]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
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
            const playerNextX = x + 1; //玩家方向——向上

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              var _tileInfo$playerNextX5, _tileInfo$weaponNextX9;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y - 1;
              const nextPlayerTile = (_tileInfo$playerNextX5 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX5 === void 0 ? void 0 : _tileInfo$playerNextX5[y];
              const nextWeaponTile = (_tileInfo$weaponNextX9 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX9 === void 0 ? void 0 : _tileInfo$weaponNextX9[weaponNextY]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKRIGHT;
                return true;
              } //玩家方向——向下

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              var _tileInfo$playerNextX6, _tileInfo$weaponNextX10;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              }

              const weaponNextX = x + 1;
              const weaponNextY = y + 1;
              const nextPlayerTile = (_tileInfo$playerNextX6 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX6 === void 0 ? void 0 : _tileInfo$playerNextX6[y];
              const nextWeaponTile = (_tileInfo$weaponNextX10 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX10 === void 0 ? void 0 : _tileInfo$weaponNextX10[weaponNextY]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === weaponNextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === weaponNextY) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKLEFT;
                return true;
              } //玩家方向——向左

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              var _tileInfo$playerNextX7, _tileInfo$weaponNextX11;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              }

              const weaponNextX = x;
              const nextPlayerTile = (_tileInfo$playerNextX7 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX7 === void 0 ? void 0 : _tileInfo$playerNextX7[y];
              const nextWeaponTile = (_tileInfo$weaponNextX11 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX11 === void 0 ? void 0 : _tileInfo$weaponNextX11[y]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
              } else {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKBACK;
                return true;
              } //玩家方向——向右

            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              var _tileInfo$playerNextX8, _tileInfo$weaponNextX12;

              if (playerNextX > row - 1) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              }

              const weaponNextX = x + 2;
              const nextPlayerTile = (_tileInfo$playerNextX8 = tileInfo[playerNextX]) === null || _tileInfo$playerNextX8 === void 0 ? void 0 : _tileInfo$playerNextX8[y];
              const nextWeaponTile = (_tileInfo$weaponNextX12 = tileInfo[weaponNextX]) === null || _tileInfo$weaponNextX12 === void 0 ? void 0 : _tileInfo$weaponNextX12[y]; //判断门

              if ((doorX === playerNextX && doorY === y || doorX === weaponNextX && doorY === y) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                return true;
              } //判断敌人


              for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const {
                  x: enemyX,
                  y: enemyY
                } = enemy;

                if (enemyX === playerNextX && enemyY === y || enemyX === weaponNextX && enemyY === y) {
                  this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                    error: Error()
                  }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKFRONT;
                  return true;
                }
              } //判断地裂陷阱


              if (bursts.some(burst => burst.x === playerNextX && burst.y === y) && (!nextWeaponTile || nextWeaponTile.turnable)) {
                return false;
              } //最后判断地图元素


              if (nextPlayerTile && nextPlayerTile.moveable && (!nextWeaponTile || nextWeaponTile.turnable)) {// empty
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

            let nextY, nextX;

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


            for (let i = 0; i < enemies.length; i++) {
              const enemy = enemies[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === nextX && enemyY === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (enemyX === nextX && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNLEFT;
                return true;
              } else if (enemyX === x && enemyY === nextY) {
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
            var _tileInfo$x15, _tileInfo$x16, _tileInfo$nextX5, _tileInfo$nextX6, _tileInfo$nextX7, _tileInfo$nextX8;

            let nextX, nextY;

            if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP) {
              //朝上右转的话，右上角三个tile都必须turnable为true
              nextY = y - 1;
              nextX = x + 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).BOTTOM) {
              nextY = y + 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).LEFT) {
              nextY = y - 1;
              nextX = x - 1;
            } else if (direction === (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).RIGHT) {
              nextY = y + 1;
              nextX = x + 1;
            } //判断门


            if ((doorX === x && doorY === nextY || doorX === nextX && doorY === y || doorX === nextX && doorY === nextY) && doorState !== (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).DEATH) {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            } //判断敌人


            for (let i = 0; i < enemies.length; i++) {
              const enemy = enemies[i];
              const {
                x: enemyX,
                y: enemyY
              } = enemy;

              if (enemyX === nextX && enemyY === y) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (enemyX === nextX && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              } else if (enemyX === x && enemyY === nextY) {
                this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                  error: Error()
                }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
                return true;
              }
            } //最后判断地图元素


            if ((!((_tileInfo$x15 = tileInfo[x]) === null || _tileInfo$x15 === void 0 ? void 0 : _tileInfo$x15[nextY]) || ((_tileInfo$x16 = tileInfo[x]) === null || _tileInfo$x16 === void 0 ? void 0 : _tileInfo$x16[nextY].turnable)) && (!((_tileInfo$nextX5 = tileInfo[nextX]) === null || _tileInfo$nextX5 === void 0 ? void 0 : _tileInfo$nextX5[y]) || ((_tileInfo$nextX6 = tileInfo[nextX]) === null || _tileInfo$nextX6 === void 0 ? void 0 : _tileInfo$nextX6[y].turnable)) && (!((_tileInfo$nextX7 = tileInfo[nextX]) === null || _tileInfo$nextX7 === void 0 ? void 0 : _tileInfo$nextX7[nextY]) || ((_tileInfo$nextX8 = tileInfo[nextX]) === null || _tileInfo$nextX8 === void 0 ? void 0 : _tileInfo$nextX8[nextY].turnable))) {// empty
            } else {
              this.state = (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
                error: Error()
              }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).BLOCKTURNRIGHT;
              return true;
            }
          }

          return false;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerManager.js.map