import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(10).pipe(
    RxOp.skipUntil(Rx.timer(500)),
    RxOp.take(50)
).subscribe(console.log);