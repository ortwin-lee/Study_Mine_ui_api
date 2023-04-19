import { _decorator, Component, Node, resources, SpriteAtlas, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadAtlas')
export class LoadAtlas extends Component {
    private _timespan: number = 2;
    private _countdown: number = 0;

    private _atlas: SpriteAtlas = null;

    start() {
        resources.load('sheets', SpriteAtlas, (err, atlas) => {
            this._atlas = atlas;
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBoxBlood02a');
        });
    }

    update(deltaTime: number) {
        this._countdown += deltaTime;
        if (this._countdown  <= this._timespan) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBoxBlood02a');
        } else if (this._countdown <= this._timespan * 2) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBoxBlood02b');
        } else if (this._countdown <= this._timespan * 3) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBoxScore');
        } else if (this._countdown <= this._timespan * 4) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBtn01');
        } else if (this._countdown <= this._timespan * 5) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBtn02');
        } else if (this._countdown <= this._timespan * 6) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightIconGold');
        } else if (this._countdown <= this._timespan * 7) {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('logo');
        } else {
            this.node.getComponent(Sprite).spriteFrame = this._atlas.getSpriteFrame('fightBoxBlood02a');
            this._countdown = 0;
        }
    }
}


