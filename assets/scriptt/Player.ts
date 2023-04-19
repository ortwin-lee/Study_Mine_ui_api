import { log } from 'cc';
import { _decorator, Component, Node, EventTouch, Vec2, Vec3, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags} from 'cc';
const { ccclass } = _decorator;

@ccclass('Player')
export class Player extends Component {
    private _isFocus: boolean = false;

    start() {
        this.node.on(Node.EventType.TOUCH_START, () => {
            this._isFocus = true;
        });
        this.node.on(Node.EventType.TOUCH_END, () => {
            this._isFocus = false;
        });
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            if( this._isFocus ) {
                let eventPos: Vec2 = event.getDelta();
                let nodePos: Vec3 = this.node.position;
                this.node.setPosition(nodePos.x + eventPos.x, nodePos.y + eventPos.y, nodePos.z);
            }
        })


        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
        //     EPhysics2DDrawFlags.Pair |
        //     EPhysics2DDrawFlags.CenterOfMass |
        //     EPhysics2DDrawFlags.Joint |
        //     EPhysics2DDrawFlags.Shape;

        let collider = this.getComponent(Collider2D);
        if( collider ) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);

        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        log(`onBeginContact: ${selfCollider.tag} & ${otherCollider.tag}` );
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D) {
        log(`onEndContact: ${selfCollider.tag} & ${otherCollider.tag}` );
    }


}


