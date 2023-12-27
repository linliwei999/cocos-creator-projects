System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, EventManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "db://assets/Base/Singleton", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6c23qivLZNr7nSULUkL8cA", "EventManager", undefined);

      _export("default", EventManager = class EventManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "eventDic", new Map());
        }

        static get Instance() {
          return super.GetInstance();
        }

        //绑定方法
        //疑问点：ctx上下文 ？
        on(eventName, func, ctx) {
          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).push({
              func,
              ctx
            });
          } else {
            this.eventDic.set(eventName, [{
              func,
              ctx
            }]);
          }
        } //解绑方法


        off(eventName, func) {
          if (this.eventDic.has(eventName)) {
            var index = this.eventDic.get(eventName).findIndex(i => i.func === func);
            index > -1 && this.eventDic.get(eventName).splice(index, 1);
          }
        } //触发方法


        emit(eventName) {
          for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            params[_key - 1] = arguments[_key];
          }

          if (this.eventDic.has(eventName)) {
            this.eventDic.get(eventName).forEach((_ref) => {
              var {
                func,
                ctx
              } = _ref;

              if (ctx) {
                func.apply(ctx, params);
              } else {
                func(...params);
              }
            });
          }
        } //清空事件


        clear() {
          this.eventDic.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventManager.js.map