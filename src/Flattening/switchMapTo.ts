import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.interval(1000).pipe(
    RxOp.take(10),
    RxOp.switchMapTo(Rx.interval(300).pipe(RxOp.scan(x => x + 1, 0))),
).subscribe(console.log)