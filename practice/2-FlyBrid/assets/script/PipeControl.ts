// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    speed: number = 50;

    @property
    text: string = 'hello';

    start () {

    }

    update (dt) {
        for(let pipe of this.node.children){
            pipe.x -= this.speed * dt;
            if(pipe.x < -50){
                pipe.x += 288 * 2;
                pipe.y = Math.random() * 150 + 450; 
            }
        }

    }
}
