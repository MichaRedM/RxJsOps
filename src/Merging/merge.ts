import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.merge(
    Rx.interval(100),
    Rx.interval(200)
).pipe(RxOp.take(50)).subscribe(console.log)

