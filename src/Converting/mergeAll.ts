import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of(Rx.interval(100), Rx.interval(200), Rx.interval(300)).pipe(
    RxOp.mergeAll(),
    RxOp.take(30)
).subscribe(console.log);