import Input from "./input";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    //速度
    speed: number = 100;

    @property(cc.Label)
    label: cc.Label = null;

    start () {

    }

    update (dt) {
        //移动 dt时间隔
        this.node.x += this.speed * dt * Input.Instance.horizontal;
        this.node.y += this.speed * dt * Input.Instance.vertical;
    }
}
