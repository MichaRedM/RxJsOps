import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.take(100),
    RxOp.count()
).subscribe(console.log);

Rx.interval(0).pipe(
    RxOp.take(100),
    RxOp.count(x => x % 3 === 0)
).subscribe(console.log);