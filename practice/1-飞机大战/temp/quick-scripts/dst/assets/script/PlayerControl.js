
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
    PlayerControl.prototype.onCollisionEnter = function (ohter) {
        var _this = this;
        // console.log("发生碰撞：", ohter.tag);
        //玩家与敌机碰撞
        if (ohter.tag == 1) {
            cc.loader.loadRes("hero1_die", cc.SpriteFrame, function (err, res) {
                _this.node.getComponent(cc.Sprite).spriteFrame = res;
            });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGxheWVyQ29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBeUNDO1FBdkNHLFFBQVE7UUFFUixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQXFDaEMsQ0FBQztJQWxDRyw2QkFBSyxHQUFMO1FBQUEsaUJBaUJDO1FBaEJHLElBQUk7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSTtRQUNKLEtBQUs7UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsTUFBTTtZQUNOLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLE9BQU87WUFDUCxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN6QyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLFVBQVU7UUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFRLEVBQUU7SUFHVixDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFBdEIsaUJBU0M7UUFSRyxtQ0FBbUM7UUFDbkMsU0FBUztRQUNULElBQUcsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUM7WUFDZCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO2dCQUNwRCxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQXBDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNRO0lBSFgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdDakM7SUFBRCxvQkFBQztDQXhDRCxBQXdDQyxDQXhDMEMsRUFBRSxDQUFDLFNBQVMsR0F3Q3REO2tCQXhDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIOWtkOW8uemihOiuvuS9k1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYnVsbGV0UHJlOiBjYy5QcmVmYWIgPSBudWxsO1xuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8v56e75YqoXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpPT57XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL+aUu+WHu1xuICAgICAgICAvL+iuoeaXtuWZqFxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpPT4ge1xuICAgICAgICAgICAgLy/liJvlu7rlrZDlvLlcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZSk7XG4gICAgICAgICAgICAvL+iuvue9rueItueJqeS9k1xuICAgICAgICAgICAgYnVsbGV0LnNldFBhcmVudChjYy5kaXJlY3Rvci5nZXRTY2VuZSgpKTtcbiAgICAgICAgICAgIGJ1bGxldC54ID0gdGhpcy5ub2RlLng7XG4gICAgICAgICAgICBidWxsZXQueSA9IHRoaXMubm9kZS55ICsgNjA7XG4gICAgICAgIH0sIDAuNSk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKe5qOA5rWL5Yqf6IO9XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICBcblxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob2h0ZXIpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWPkeeUn+eisOaSnu+8mlwiLCBvaHRlci50YWcpO1xuICAgICAgICAvL+eOqeWutuS4juaVjOacuueisOaSnlxuICAgICAgICBpZihvaHRlci50YWcgPT0gMSl7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImhlcm8xX2RpZVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgcmVzKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=