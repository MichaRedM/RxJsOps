import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.interval(1000).pipe(
    RxOp.take(10),
    RxOp.scan(x => x + 1, 0),
    RxOp.switchMap(x => Rx.interval(x * 100)),
).subscribe(console.log)
