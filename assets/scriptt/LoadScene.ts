import { _decorator, Component, director, Node, log, ProgressBar, find } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LoadScene")
export class LoadScene extends Component {
    @property(ProgressBar)
    public progressBar: ProgressBar = null;

    private _isNewSceneLoaded:boolean = false;  //新场景是否预加载完成标志

    start() {
        find('/Canvas/ProgressBar').active = true;

        director.preloadScene(
            "game",
            (completedCount, totalCount, item) => {
                let progress = completedCount / totalCount;
                this.progressBar.progress = progress;
                console.log("当前进度：" + progress);
            },
            (error: Error) => {
                console.log("game 场景已经预加载");
                this._isNewSceneLoaded = true;
            }
        );
    }

    load() {
            if(this._isNewSceneLoaded) {
                director.loadScene("game", () => {
                    console.log("game 场景已经加载!");
                });
            }
    }

    onDestroy() {
        console.log("scene has destroyed!");
    }
}
