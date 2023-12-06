"use strict";
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