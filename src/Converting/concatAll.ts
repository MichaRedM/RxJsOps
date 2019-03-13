import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.of(
    Rx.interval(100).pipe(RxOp.take(10)),
    Rx.interval(200).pipe(RxOp.take(10)),
    Rx.interval(300).pipe(RxOp.take(10))
).pipe(
    RxOp.concatAll(),
).subscribe(console.log);