import { IPhysics2DContact } from 'cc';
import { _decorator, Collider2D, Component, Contact2DType, Node, physics, PhysicsSystem2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Physics')
export class Physics extends Component {

    start() {
        let collider = this.getComponent(Collider2D);
        if( collider ) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }

    openPhysicsSystem() {
        PhysicsSystem2D.instance.enable = true;
    }

    closePhysicsSystem() {
        PhysicsSystem2D.instance.enable = false;
    }


    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log(`onBeginContact: ${selfCollider.tag} & ${otherCollider.tag}` );
        let manifold = contact.getManifold();
        let worldfold = contact.getWorldManifold();

        console.log(`--------${this.node.name}---------`);

        console.log('->manifold');

        for(let point of manifold.points) {
            console.log(point.localPoint.toString());
        }
        console.log(manifold.localNormal)

        console.log('->worldfold');
        for(let point of worldfold.points) {
            console.log(point.toString());
        }
        console.log(`--------${this.node.name}---------`);




    }


    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log(`onEndContact: ${selfCollider.tag} & ${otherCollider.tag}` );
    }

    onPreSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log(`onPreSolve: ${selfCollider.tag} & ${otherCollider.tag}` );
    }

    onPostSolve(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log(`onPostSolve: ${selfCollider.tag} & ${otherCollider.tag}` );
    }
}


