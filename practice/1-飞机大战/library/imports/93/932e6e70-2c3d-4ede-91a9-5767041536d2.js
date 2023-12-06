"use strict";
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