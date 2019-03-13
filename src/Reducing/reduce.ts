import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.take(10),
    RxOp.reduce((acc, val) => acc + val, 0)
).subscribe(console.log);