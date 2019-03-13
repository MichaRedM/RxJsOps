import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.of(1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1).pipe(
    RxOp.map(x => x * 1000),
    RxOp.mergeMap((val: number) =>
        Rx.timer(val).pipe(
            RxOp.mapTo(val)
        ))
).subscribe(console.log);