// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BridControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    onLoad() {
        //开启物理引擎
        cc.director.getPhysicsManager().enabled = true;
        // 打出一条射线
        // let results = cc.director.getPhysicsManager().rayCast(this.node.getPosition(), cc.v2(this.node.x, this.node.y + 100), cc.RayCastType.Closest);
        // for(let i = 0; i < results.length; i++){
        //     let res = results[i];
        //     //射线碰到的碰撞器
        //     res.collider;
        //     //触碰到的点
        //     res.point;
        //     //碰到的法线
        //     res.normal;
        // }
    }

    start () {
        // let rbody = this.getComponent(cc.RigidBody);
        // //力
        // // rbody.applyForce(cc.v2(1000, 0), cc.v2(0, 0), true);
        // rbody.applyForceToCenter(cc.v2(1000, 0), true);
        // //速度 每秒多少像素
        // rbody.linearVelocity = cc.v2(50, 0);
        
    }

    //开始碰撞
    onBeginContact(contact, self, other){
        //得到碰撞点
        let points = contact.getWorldManifold().points;
        console.log("发生碰撞 碰撞点" + points[0]);
        //法线
        let normal = contact.getWorldManifold().normal;
        console.log("发生碰撞 法线" + normal);
    }

    //结束碰撞
    onEndContact(contact, self, other){
        console.log("结束碰撞");
    }
    
    fly(){
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 100);
    }


    update (dt) {

    }
}
