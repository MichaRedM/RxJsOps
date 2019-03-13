import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(0).pipe(
    RxOp.takeWhile(x => x < 10)
).subscribe(console.log);

Rx.interval(0).pipe(
    RxOp.takeWhile(x => x < 10, true)
).subscribe(console.log);