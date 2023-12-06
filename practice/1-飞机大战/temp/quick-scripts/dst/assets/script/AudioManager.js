
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53c61ubF7tGuJxw04VY36dL', 'AudioManager');
// script/AudioManager.ts

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
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    AudioManager.prototype.start = function () {
        // 组件播放音频
        // let player: cc.AudioSource = this.getComponent(cc.AudioSource);
        // // 加载音频
        // cc.loader.loadRes("游戏bgm", cc.AudioClip, (res, clip)=> {
        //     //赋值音频
        //     player.clip = clip;
        //     player.play();
        //     //是否正在播放
        //     player.isPlaying;
        //     //暂停
        //     player.pause();
        //     //恢复播放
        //     player.resume();
        //     //停止
        //     player.stop();
        //     player.loop = true;
        //     player.volume = 0.1;
        // });
        cc.loader.loadRes("游戏bgm", cc.AudioClip, function (res, clip) {
            //播放
            var audioId = cc.audioEngine.playMusic(clip, true);
            //是否正在播放
            cc.audioEngine.isMusicPlaying();
            //暂停
            // cc.audioEngine.pause(audioId);
            //恢复播放
            cc.audioEngine.resume(audioId);
            //停止
            // cc.audioEngine.stop(audioId);
            cc.audioEngine.setLoop(audioId, true);
            cc.audioEngine.setVolume(audioId, 0.1);
        });
    };
    AudioManager.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.Label)
    ], AudioManager.prototype, "label", void 0);
    AudioManager = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUE4Q0M7UUExQ0csV0FBSyxHQUFhLElBQUksQ0FBQzs7SUEwQzNCLENBQUM7SUF4Q0csNEJBQUssR0FBTDtRQUNJLFNBQVM7UUFDVCxrRUFBa0U7UUFDbEUsVUFBVTtRQUNWLDJEQUEyRDtRQUMzRCxhQUFhO1FBQ2IsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsTUFBTTtRQUVOLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7WUFDL0MsSUFBSTtZQUNKLElBQUksT0FBTyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRCxRQUFRO1lBQ1IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNoQyxJQUFJO1lBQ0osaUNBQWlDO1lBQ2pDLE1BQU07WUFDTixFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixJQUFJO1lBQ0osZ0NBQWdDO1lBQ2hDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFITixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNkNoQztJQUFELG1CQUFDO0NBN0NELEFBNkNDLENBN0N5QyxFQUFFLENBQUMsU0FBUyxHQTZDckQ7a0JBN0NvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9NYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDnu4Tku7bmkq3mlL7pn7PpopFcbiAgICAgICAgLy8gbGV0IHBsYXllcjogY2MuQXVkaW9Tb3VyY2UgPSB0aGlzLmdldENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgIC8vIC8vIOWKoOi9vemfs+mikVxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhcIua4uOaIj2JnbVwiLCBjYy5BdWRpb0NsaXAsIChyZXMsIGNsaXApPT4ge1xuICAgICAgICAvLyAgICAgLy/otYvlgLzpn7PpopFcbiAgICAgICAgLy8gICAgIHBsYXllci5jbGlwID0gY2xpcDtcbiAgICAgICAgLy8gICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIC8vICAgICAvL+aYr+WQpuato+WcqOaSreaUvlxuICAgICAgICAvLyAgICAgcGxheWVyLmlzUGxheWluZztcbiAgICAgICAgLy8gICAgIC8v5pqC5YGcXG4gICAgICAgIC8vICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgLy8gICAgIC8v5oGi5aSN5pKt5pS+XG4gICAgICAgIC8vICAgICBwbGF5ZXIucmVzdW1lKCk7XG4gICAgICAgIC8vICAgICAvL+WBnOatolxuICAgICAgICAvLyAgICAgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgLy8gICAgIHBsYXllci5sb29wID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHBsYXllci52b2x1bWUgPSAwLjE7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwi5ri45oiPYmdtXCIsIGNjLkF1ZGlvQ2xpcCwgKHJlcywgY2xpcCk9PiB7XG4gICAgICAgICAgICAvL+aSreaUvlxuICAgICAgICAgICAgbGV0IGF1ZGlvSWQ6IG51bWJlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyhjbGlwLCB0cnVlKTtcbiAgICAgICAgICAgIC8v5piv5ZCm5q2j5Zyo5pKt5pS+XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpO1xuICAgICAgICAgICAgLy/mmoLlgZxcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBhdXNlKGF1ZGlvSWQpO1xuICAgICAgICAgICAgLy/mgaLlpI3mkq3mlL5cbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZShhdWRpb0lkKTtcbiAgICAgICAgICAgIC8v5YGc5q2iXG4gICAgICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TG9vcChhdWRpb0lkLCB0cnVlKTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShhdWRpb0lkLCAwLjEpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcblxuICAgIH1cbn1cbiJdfQ==