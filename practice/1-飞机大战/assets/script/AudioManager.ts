// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class AudioManager extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {
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

        cc.loader.loadRes("游戏bgm", cc.AudioClip, (res, clip)=> {
            //播放
            let audioId: number = cc.audioEngine.playMusic(clip, true);
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

    }

    update (dt) {

    }
}
