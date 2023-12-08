const {ccclass, property} = cc._decorator;
import BirdControl from './BirdControl';

@ccclass
export default class NewClass extends cc.Component {
    //bird预设体
    @property(cc.Prefab)
    birdPre: cc.Prefab = null;
    //生成bird间隔
    time: number = 1;
    //分数
    score: number = 0;
    //分数标签
    @property(cc.Label)
    scoreLabel: cc.Label;
    //返回试图
    @property(cc.Node)
    back_View: cc.Node; 

    start () {
        //每隔time生成一只brid
        // this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(this.time), cc.callFunc(()=>{
        //     this.createBird();
        // }))));
        this.schedule(()=>{
            this.createBird();
        }, 1);
    }

    update (dt) {

    }

    //创建bird
    createBird(){
        let bird = cc.instantiate(this.birdPre);
        bird.setParent(this.node);
        bird.y = this.node.y;
        bird.x = Math.random() * 220 - 110;
        //飞翔
        bird.getComponent(BirdControl).fly();
        this.addScoreInit(bird);
        this.dieInit(bird);
    }

    //加分
    addScoreInit(bird){
        bird.getComponent(BirdControl).addSoreCallBack = () =>{
            this.score += 100;
            this.scoreLabel.string = String(this.score);
            console.log('当前分数：', this.score);
        };
    }

     //死亡
     dieInit(bird){
        bird.getComponent(BirdControl).dieCallBack = () =>{
            this.node.destroyAllChildren();
            this.node.stopAllActions();
            this.back_View.active = true;
            this.unscheduleAllCallbacks();
            // console.log('游戏结束');
        };
    }

    backView(){
        cc.director.loadScene("start"); 
    }
}
