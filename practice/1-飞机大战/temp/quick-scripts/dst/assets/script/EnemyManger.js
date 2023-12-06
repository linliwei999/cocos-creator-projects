
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/EnemyManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '932e65wLD1O3pGpV2cEFTbS', 'EnemyManger');
// script/EnemyManger.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyManger = /** @class */ (function (_super) {
    __extends(EnemyManger, _super);
    function EnemyManger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //敌机预设体
        _this.enemyPre = null;
        _this.label = null;
        return _this;
    }
    EnemyManger.prototype.start = function () {
        var _this = this;
        //每隔两秒创建一个敌机
        this.schedule(function () {
            //创建敌机
            var enemy = cc.instantiate(_this.enemyPre);
            enemy.setParent(cc.director.getScene());
            enemy.y = _this.node.y;
            enemy.x = Math.random() * 400;
        }, 1);
    };
    EnemyManger.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], EnemyManger.prototype, "enemyPre", void 0);
    __decorate([
        property(cc.Label)
    ], EnemyManger.prototype, "label", void 0);
    EnemyManger = __decorate([
        ccclass
    ], EnemyManger);
    return EnemyManger;
}(cc.Component));
exports.default = EnemyManger;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvRW5lbXlNYW5nZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQXVCQztRQXJCRyxPQUFPO1FBRVAsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixXQUFLLEdBQWEsSUFBSSxDQUFDOztJQWdCM0IsQ0FBQztJQWRHLDJCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLFlBQVk7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTTtZQUNOLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQVEsRUFBRTtJQUVWLENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNJO0lBTk4sV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXNCL0I7SUFBRCxrQkFBQztDQXRCRCxBQXNCQyxDQXRCd0MsRUFBRSxDQUFDLFNBQVMsR0FzQnBEO2tCQXRCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15TWFuZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvL+aVjOacuumihOiuvuS9k1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZW5lbXlQcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy/mr4/pmpTkuKTnp5LliJvlu7rkuIDkuKrmlYzmnLpcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+IHtcbiAgICAgICAgICAgIC8v5Yib5bu65pWM5py6XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmVuZW15UHJlKTtcbiAgICAgICAgICAgIGVuZW15LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcbiAgICAgICAgICAgIGVuZW15LnkgPSB0aGlzLm5vZGUueTtcbiAgICAgICAgICAgIGVuZW15LnggPSBNYXRoLnJhbmRvbSgpICogNDAwO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG5cbiAgICB9XG59XG4iXX0=