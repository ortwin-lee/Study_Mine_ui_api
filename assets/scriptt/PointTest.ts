import { EPhysics2DDrawFlags, ERaycast2DType, rect, v2 } from 'cc';
import { _decorator, Component, director, Node, PhysicsSystem2D } from 'cc';
const { ccclass } = _decorator;

@ccclass('RayTest')
export class PointTest extends Component {
    private _physicsInstance: PhysicsSystem2D = null;

    onLoad() {
        this._physicsInstance = PhysicsSystem2D.instance;
        this._physicsInstance.enable = true;

        //打开物理引擎调试信息
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
            EPhysics2DDrawFlags.Pair |
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape;
    }


    update(dt: number) {
        //需要场景中有刚体和碰撞主件

        //点检测
        // const pointColliders = this._physicsInstance.testPoint(v2(200, 200));
        // if (pointColliders.length === 0) {
        //     console.log("没有检测到碰撞体");
        // } else {
        //     for (let collider of pointColliders) {
        //         console.log(`name=${collider.node.name}, tag=${collider.tag}`);
        //     }
        // }


        //矩形检测
        // const reactColliders = this._physicsInstance.testAABB(rect(200, 400, 100, 100));
        // if (reactColliders.length === 0) {
        //     // console.log("没有检测到碰撞体");
        // } else {
        //     for (let collider of reactColliders) {
        //         console.log(`name=${collider.node.name}, tag=${collider.tag}`);
        //     }
        // }

        // 射线检测
        const results = this._physicsInstance.raycast(v2(300, 100), v2(600, 400), ERaycast2DType.Any);
        if (results.length === 0) {
            console.log("没有检测到碰撞体");
        } else {
            console.log('========================');
            for (let result of results) {
                console.log(
                    `name=${result.collider.node.name} ,  tag=${result.collider.tag},
                    fixtureIndex=${result.fixtureIndex}, fraction=${result.fraction},
                    point=${result.point.toString()}, normal=${result.normal}`
                    );
                console.log('    -----     ');

            }
            console.log('========================');
        }
    }

}


