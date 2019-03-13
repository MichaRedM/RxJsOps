import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.interval(500).pipe(
    RxOp.take(10),
    RxOp.mergeMapTo(Rx.of(10,11)),
).subscribe(console.log)