import { UIOpacity } from 'cc';
import { _decorator, Component, EventTouch, Node, Vec2, Vec3, tween, ParticleSystem2D, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Particle')
export class Particle extends Component {
    private _boomParticle: Node = null;

    onLoad() {
        this._boomParticle = this.node.getChildByName('Node');
    }

    start() {
        this.node.on(Node.EventType.TOUCH_START, () => {
            tween(this.node)
                .by(3, {position: new Vec3(0, 200, 0)})
                .call(()=>{
                    this._boomParticle.active = true;
                    let ps:ParticleSystem2D = this._boomParticle.getComponent(ParticleSystem2D);
                    ps.resetSystem();
                    let opacity:UIOpacity = this.node.getComponent(UIOpacity);
                    opacity.opacity = 0;
                })
                .delay(1)
                .removeSelf()
                .start()
        })
    }


}


