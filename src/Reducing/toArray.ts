import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.take(20),
    RxOp.toArray()
).subscribe(console.log);