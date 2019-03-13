import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(500).pipe(
    RxOp.withLatestFrom(
        Rx.interval(100),
        (a, b) =>({ a, b })
    ),
).subscribe(console.log)