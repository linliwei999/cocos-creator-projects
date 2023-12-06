// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class SxRobotControl extends cc.Component {

    //方向
    dir: cc.Vec2 = cc.v2(0, 1);

    onLoad () {
        //开启物理引擎
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }

    update (dt) {
        //移动
        this.node.x += this.dir.x * 100 * dt;
        this.node.y += this.dir.y * 100 * dt;
        //射线检测
        let res = cc.director.getPhysicsManager().rayCast(this.node.getPosition(), cc.v2(this.node.x, this.node.y + this.dir.y * 100), cc.RayCastType.Closest);
        console.log(res.length);
        if(res.length > 0){
            this.dir.y *=  -1;
        }
        
    }
}
