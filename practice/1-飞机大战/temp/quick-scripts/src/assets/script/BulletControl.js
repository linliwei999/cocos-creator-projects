"use strict";
cc._RF.push(module, '90966fOw2JAQ6iXvTzh5v6A', 'BulletControl');
// script/BulletControl.ts

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
var EnemyControl_1 = require("./EnemyControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletControl = /** @class */ (function (_super) {
    __extends(BulletControl, _super);
    function BulletControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 800;
        return _this;
    }
    BulletControl.prototype.start = function () {
    };
    BulletControl.prototype.update = function (dt) {
        // 移动
        this.node.y += this.speed * dt;
        // 出屏销毁子弹
        if (this.node.y > 820) {
            this.node.destroy();
        }
    };
    BulletControl.prototype.onCollisionEnter = function (other) {
        //如果碰到敌人，销毁自己，让敌人死亡
        if (other.tag == 1) {
            //销毁敌人
            other.getComponent(EnemyControl_1.default).die();
            //销毁自己
            this.node.destroy();
        }
    };
    __decorate([
        property
    ], BulletControl.prototype, "speed", void 0);
    BulletControl = __decorate([
        ccclass
    ], BulletControl);
    return BulletControl;
}(cc.Component));
exports.default = BulletControl;

cc._RF.pop();