// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {
        //url 
        let url = "https://yuexunedu.com/store/api/v1.0/inquirePortalSettingGlobal.json?releaseType=1&domainName=service&sessionUuid=";
        //请求
        let request = cc.loader.getXMLHttpRequest();
        request.open("GET", url, true); //异步
        request.onreadystatechange = () =>{
            //请求状态改变调用
            //请求结束后，获取信息
            if(request.readyState == 4 && request.status == 200){
                console.log("请求完成");
                console.log("" + request.responseText);
            }
        };
        request.send();
    }

    update (dt) {

    }
}
