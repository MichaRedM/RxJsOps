import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.interval(1000).pipe(
    RxOp.take(10),
    RxOp.exhaustMap(x => Rx.interval(x * 100).pipe(
        RxOp.take(30),
        RxOp.map(y => `${x}:${y}`)
        )
    ),
).subscribe(console.log)
