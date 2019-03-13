import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.zip(
    Rx.interval(5000),
    Rx.of(
        Rx.interval(100).pipe(RxOp.map(x => 'a' + x), RxOp.skip(1)),
        Rx.interval(500).pipe(RxOp.map(x => 'b' + x), RxOp.skip(1)),
        Rx.interval(1000).pipe(RxOp.map(x => 'c' + x), RxOp.skip(1), RxOp.take(10))
    )
).pipe(
    RxOp.pluck(1),
    RxOp.switchAll(),
).subscribe(console.log);