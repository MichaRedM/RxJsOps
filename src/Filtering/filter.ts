import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(100).pipe(
    RxOp.filter(x => x % 2 === 0),
    RxOp.take(10)
).subscribe(console.log)