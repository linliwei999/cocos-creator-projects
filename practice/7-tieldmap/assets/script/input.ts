const {ccclass, property} = cc._decorator;

//单例
export default class Input {
    private static instance: Input = null;

    //水平轴
    horizontal: number = 0;

    //垂直轴
    vertical: number = 0;

    static get Instance(){
        if(this.instance == null){
            this.instance = new Input();
        }
        return this.instance;
    }

    constructor(){
        //监听键盘按下
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event)=> {
            if(event.keyCode == cc.macro.KEY.w){
                this.vertical = 1;
            }else if(event.keyCode == cc.macro.KEY.s){
                this.vertical = -1;
            }
            if(event.keyCode == cc.macro.KEY.a){
                this.horizontal = -1;
            }else if(event.keyCode == cc.macro.KEY.d){
                this.horizontal = 1;
            }
        });
        //监听键盘抬起
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, (event)=> {
            if(event.keyCode == cc.macro.KEY.w && this.vertical == 1){
                this.vertical = 0;
            }else if(event.keyCode == cc.macro.KEY.s && this.vertical == -1){
                this.vertical = 0;
            }
            if(event.keyCode == cc.macro.KEY.a && this.horizontal == -1){
                this.horizontal = 0;
            }else if(event.keyCode == cc.macro.KEY.d  && this.horizontal == 1){
                this.horizontal = 0;
            }
        });
    }
}
