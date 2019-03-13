import * as RX from 'rxjs';
import * as ops from 'rxjs/operators'

let time = 0;

// const obs = new RX.Observable(o => {
//     let i: number = 0;
//     let j: number = 10;
//     const intervall = setInterval(() => {
//         j = (j - 1) % 10;
//         if (j=== 0) {
//             o.next(i++ + '');
//         }
//         time++;
//     }, 10);
//     return () => clearInterval(intervall);
// });
const obs = new RX.Subject()
let i: number = 0;
let j: number = 10;
const intervall = setInterval(() => {
    time++;
    j = (j - 1) % 10;
    if (j=== 0) {
        obs.next(i++ + '');
    }
}, 10);

(async () => {
    const operators: { name: string, op: any }[] = [
        // { name: 'none', op: undefined },
        { name: 'debounceTime', op: ops.debounceTime(150) },
        { name: 'auditTime', op: ops.auditTime(150) },
        { name: 'sampleTime', op: ops.sampleTime(150) },
        { name: 'throttleTime', op: ops.throttleTime(150) },
    ];

    for (let x of operators) {
        await new Promise((resolve) => {
            i = time = 0;
            obs.pipe(
                ops.take(10),
                x.op
            ).subscribe(
                y => console.log(time * 10 + '|' + x.name + ':', y),
                err => console.error(err),
                () => resolve(),
            );
            obs.pipe(
                ops.take(10),
            ).subscribe(
                y => console.log(time * 10 + '| 0 :', y),
                err => console.error(err),
                () => resolve(),
            );
        });
    }
    clearInterval(intervall);
})();
