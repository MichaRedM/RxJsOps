import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(500).pipe(
    RxOp.take(10),
    RxOp.concatMapTo(Rx.interval(500).pipe(RxOp.take(3), RxOp.scan(x => x + 1, 0))),
).subscribe(console.log)