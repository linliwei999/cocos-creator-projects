
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlayerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b3c7NHQMZEC7I4e8IhCme9', 'PlayerControl');
// script/PlayerControl.ts

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
var PlayerControl = /** @class */ (function (_super) {
    __extends(PlayerControl, _super);
    function PlayerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 子弹预设体
        _this.bulletPre = null;
        return _this;
    }
    PlayerControl.prototype.start = function () {
        var _this = this;
        //移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.node.setPosition(event.getLocation());
        });
        //攻击
        //计时器
        this.schedule(function () {
            //创建子弹
            var bullet = cc.instantiate(_this.bulletPre);
            //设置父物体
            bullet.setParent(cc.director.getScene());
            bullet.x = _this.node.x;
            bullet.y = _this.node.y + 60;
        }, 0.5);
        //开启碰撞检测功能
        cc.director.getCollisionManager().enabled = true;
    };
    PlayerControl.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Prefab)
    ], PlayerControl.prototype, "bulletPre", void 0);
    PlayerControl = __decorate([
        ccclass
    ], PlayerControl);
    return PlayerControl;
}(cc.Component));
exports.default = PlayerControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxheWVyQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBOEJDO1FBNUJHLFFBQVE7UUFFUixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQTBCaEMsQ0FBQztJQXZCRyw2QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJHLElBQUk7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSTtRQUNKLEtBQUs7UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTTtZQUNOLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLE9BQU87WUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLFVBQVU7UUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBekJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0RBQ1E7SUFIWCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBNkJqQztJQUFELG9CQUFDO0NBN0JELEFBNkJDLENBN0IwQyxFQUFFLENBQUMsU0FBUyxHQTZCdEQ7a0JBN0JvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy8g5a2Q5by56aKE6K6+5L2TXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBidWxsZXRQcmU6IGNjLlByZWZhYiA9IG51bGw7XG5cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy/np7vliqhcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCk9PntcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5pS75Ye7XG4gICAgICAgIC8v6K6h5pe25ZmoXG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PiB7XG4gICAgICAgICAgICAvL+WIm+W7uuWtkOW8uVxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlKTtcbiAgICAgICAgICAgIC8v6K6+572u54i254mp5L2TXG4gICAgICAgICAgICBidWxsZXQuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpO1xuICAgICAgICAgICAgYnVsbGV0LnggPSB0aGlzLm5vZGUueDtcbiAgICAgICAgICAgIGJ1bGxldC55ID0gdGhpcy5ub2RlLnkgKyA2MDtcbiAgICAgICAgfSwgMC41KTtcbiAgICAgICAgLy/lvIDlkK/norDmkp7mo4DmtYvlip/og71cbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgIFxuXG4gICAgfVxufVxuIl19