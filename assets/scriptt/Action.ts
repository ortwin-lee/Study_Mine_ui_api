import { _decorator, Component, math, Node, Quat, tween, Vec2, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Action")
export class Action extends Component {
    start() {
        let tweenDuration: number = 1.0;




        // tween(this.node.position)
        //     .to(tweenDuration, new Vec3(200, 200, 0),
        //         {
        //             easing: 'backInOut',
        //             onUpdate: (target: Vec3, ratio: number) => {
        //                 this.node.position = target;
        //             },
        //             progress: (start: number, end: number, current: number, ratio: number): number => {
        //                 return math.lerp(start, end, ratio);
        //             }
        //         }
        //     )
        //     .start();


        // 链式 API
        // tween()
        //     .target(this.node)
        //     .to(1.0, { position: new Vec3(0, 200, 0) })
        //     .by(1.0, { position: new Vec3(0, -200, 0) })
        //     .delay(1.0)
        //     .by(1.0, { position: new Vec3(200, 200, 0) })
        //     .start()


        // 开发中使用 Node 作为绑定目标的情景会更多一些
        // let quat: Quat = new Quat();
        // Quat.fromEuler(quat, 0, 0, 270);
        // tween(this.node)
        //     .to(tweenDuration,
        //         {
        //             position: new Vec3(200, 200, 0),
        //             scale: new Vec3(1.2, 3, 1),
        //             rotation: quat
        //         },
        //         {
        //             easing: 'backInOut',
        //         }
        //         )
        //     .start();



        // 整合多个缓动
        // union 方法会将当前所有的动作合并为一整个，代码示例如下：
        // tween(this.node)
        //     .to(tweenDuration, { position:new Vec3(0, 200, 0) })  // 这里以 node 为缓动的目标
        //     .to(tweenDuration, { position:new Vec3(0, -200, 0) }) // 此时 Tween 内的动作数量为 2
        //     .union()                                             // 这里会将上述的两个缓动整合成一个，此时 Tween 内的动作数量为 1
        //     .start();


        // 缓动队列
        // // sequence 会将传入的缓动转化为队列形式并加入到当前的缓动内，代码示例如下：
        // let t1 = tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, 200, 0) })
        // let t2 = tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, -200, 0) })
        // tween(this.node).sequence(t1, t2).start(); // 将 t1 和 t2 两个缓动加入到新的缓动队列内



        // 同时执行多个缓动
        // // parallel 会将传入的缓动转化为并行形式并加入到当前的缓动内，代码示例如下：
        // let t1 = tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, 200, 0) })
        // let t2 = tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, -200, 0) })
        // tween(this.node).parallel(t1, t2).start(); // 将 t1 和 t2 转化为并行的缓动并加入当前的缓动


        // 延迟 1 秒后，开始进行运动，并连续运动两次。
        // tween(this.node)
        //     .delay(1.0)
        //     .to(tweenDuration, { position: new Vec3(0, 200, 0) })
        //     .to(tweenDuration, { position: new Vec3(0, -200, 0) })
        //     .start()
        // 在第一次运动后，会延迟 1 秒再做第二次运动。
        // tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, 200, 0) })
        //     .delay(1.0)
        //     .by(tweenDuration, { position: new Vec3(0, -200, 0) })
        //     .start()



        // 若第二个参数 embedTween 不为空，则会重复嵌入的缓动，代码示例如下：
        // let embedTween = tween(this.node)
        //     .by(tweenDuration, { position: new Vec3(0, -200, 0) })

        // tween(this.node)
        //     .to(tweenDuration, { position: new Vec3(0, 200, 0) })
        //     .repeat(3, embedTween)  // 这里会重复 embedTween
        //     .start()
        //     }


        tween(this.node)
            .hide()
            .delay(1.0)
            .show()
            .start();

        tween(this.node)
            .set({ position: new Vec3(0, 100, 0), scale: new Vec3(2, 2, 2), rotation: Quat.IDENTITY } )
            .start();


    }
}
