System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EventManager, EVENT_ENUM, _dec, _class, _crd, ccclass, property, ControlManager;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "db://assets/Runtime/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEVENT_ENUM(extras) {
    _reporterNs.report("EVENT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.default;
    }, function (_unresolved_3) {
      EVENT_ENUM = _unresolved_3.EVENT_ENUM;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3697cTwkKRB+oQxVRs/8Phn", "ControlManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ControlManager", ControlManager = (_dec = ccclass('ControlManager'), _dec(_class = class ControlManager extends Component {
        handleCtrl() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).Instance.emit((_crd && EVENT_ENUM === void 0 ? (_reportPossibleCrUseOfEVENT_ENUM({
            error: Error()
          }), EVENT_ENUM) : EVENT_ENUM).NEXT_LEVEL);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ControlManager.js.map