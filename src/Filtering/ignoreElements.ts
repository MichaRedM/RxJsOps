import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(100).pipe(
    RxOp.tap(x => console.log('in:', x)),
    RxOp.take(10),
    RxOp.ignoreElements()
).subscribe(
    console.log,
    console.error,
    () => console.log('done')
);