System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, EVENT_ENUM, EventManager, EntityManager, DoorStateMachine, _dec, _class, _crd, ccclass, property, DoorManager;

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

  function _reportPossibleCrUseOfEntityManager(extras) {
    _reporterNs.report("EntityManager", "db://assets/Base/EntityManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoorStateMachine(extras) {
    _reporterNs.report("DoorStateMachine", "db://assets/Scripts/Door/DoorStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DIRECTION_ENUM = _unresolved_2.DIRECTION_ENUM;
      ENTITY_STATE_ENUM = _unresolved_2.ENTITY_STATE_ENUM;
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
      EVENT_ENUM = _unresolved_2.EVENT_ENUM;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.default;
    }, function (_unresolved_4) {
      EntityManager = _unresolved_4.EntityManager;
    }, function (_unresolved_5) {
      DoorStateMachine = _unresolved_5.DoorStateMachine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c142mE7ddBKLdgXG4oMzyV", "DoorManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DoorManager", DoorManager = (_dec = ccclass('DoorManager'), _dec(_class = class DoorManager extends (_crd && EntityManager === void 0 ? (_reportPossibleCrUseOfEntityManager({
        error: Error()
      }), EntityManager) : EntityManager) {
        async init() {
          this.fsm = this.node.addComponent(_crd && DoorStateMachine === void 0 ? (_reportPossibleCrUseOfDoorStateMachine({
            error: Error()
          }), DoorStateMachine) : DoorStateMachine);
          await this.fsm.init();
          super.init({
            x: 7,
            y: 8,
            type: (_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).DOOR,
            direction: (_crd && DIRECTION_ENUM === void 0 ? (_reportPossibleCrUseOfDIRECTION_ENUM({
              error: Error()
            }), DIRECTION_ENUM) : DIRECTION_ENUM).TOP,
            state: (_crd && ENTITY_STATE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_STATE_ENUM({
              error: Error()
            }), ENTITY_STATE_ENUM) : ENTITY_STATE_ENUM).IDLE
          });
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.on((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).DOOR_OPEN, this.onOpen, this);
        }

        onDestroy() {
          super.onDestroy();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.off((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).DOOR_OPEN, this.onOpen);
        }

        onOpen() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DoorManager.js.map