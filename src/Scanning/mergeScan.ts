import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.from([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]).pipe(
    RxOp.zip(Rx.interval(100)),
    RxOp.pluck(0)
).pipe(
    RxOp.mergeScan((acc: number, val: number) => {
        return Rx.interval(val * 10).pipe(
            RxOp.take(2),
            RxOp.mapTo(val + acc)
        );
    }, 0)
).subscribe(console.log);
