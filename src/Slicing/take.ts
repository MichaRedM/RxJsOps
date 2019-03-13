import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.take(10)
).subscribe(console.log)