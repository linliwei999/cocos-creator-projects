"use strict";
cc._RF.push(module, '23209RHIrtDVJP9P6Qq/+bH', 'EnemyControl');
// script/EnemyControl.ts

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
var EnemyControl = /** @class */ (function (_super) {
    __extends(EnemyControl, _super);
    function EnemyControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        //是否死亡
        _this.isDie = false;
        return _this;
    }
    EnemyControl.prototype.start = function () {
    };
    EnemyControl.prototype.update = function (dt) {
        //移动
        if (!this.isDie) {
            this.node.y -= 200 * dt;
        }
        if (this.node.y < -850) {
            this.die();
        }
    };
    //死亡
    EnemyControl.prototype.die = function () {
        var _this = this;
        this.isDie = true;
        //加载爆炸图片
        cc.loader.loadRes("enemy0_die", cc.SpriteFrame, function (err, res) {
            _this.node.getComponent(cc.Sprite).spriteFrame = res;
        });
        //300毫秒后销毁
        setTimeout(function () {
            _this.node.destroy();
        }, 300);
    };
    __decorate([
        property(cc.Label)
    ], EnemyControl.prototype, "label", void 0);
    EnemyControl = __decorate([
        ccclass
    ], EnemyControl);
    return EnemyControl;
}(cc.Component));
exports.default = EnemyControl;

cc._RF.pop();