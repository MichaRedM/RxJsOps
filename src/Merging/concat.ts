import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.concat(
    Rx.interval(100).pipe(RxOp.take(25)),
    Rx.interval(200)
).pipe(RxOp.take(50)).subscribe(console.log)

