import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Load')
export class Load extends Component {
    private _timespan: number = 2;
    private _countdown: number = 0;
    private _isWind: boolean = true;
    start() {
        resources.load('coreWind/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            this.node.getComponent(Sprite).spriteFrame = spriteFrame;
        });
    }

    update(dt: number) {
        this._countdown += dt;
        if(this._countdown >= this._timespan ) {
            this._countdown = 0;
            if(this._isWind){
                resources.load('effectsTextures136/spriteFrame', SpriteFrame, (err, spriteFrame) => {
                    this.node.getComponent(Sprite).spriteFrame = spriteFrame;
                });
                this._isWind = false;
            }else {
                resources.load('coreWind/spriteFrame', SpriteFrame, (err, spriteFrame) => {
                    this.node.getComponent(Sprite).spriteFrame = spriteFrame;
                });
                this._isWind = true;
            }

        }
    }

}


