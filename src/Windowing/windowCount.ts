import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(20),
    RxOp.windowCount(2),
    RxOp.map((x, i) => x.pipe(
        RxOp.map((x) => `${i}: ${x}`)
    ))
).subscribe(x => x.subscribe(x => console.log('A:', x)));

Rx.interval(100).pipe(
    RxOp.take(20),
    RxOp.windowCount(3, 5),
    RxOp.map((x, i) => x.pipe(
        RxOp.map((x) => `${i}: ${x}`)
    ))
).subscribe(x => x.subscribe(x => console.log('B:', x)));