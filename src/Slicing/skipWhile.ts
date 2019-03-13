import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.take(50),
    RxOp.skipWhile(x => x % 5 !== 4),
).subscribe(console.log);