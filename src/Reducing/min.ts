import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(0).pipe(
    RxOp.take(100),
    RxOp.min()
).subscribe(console.log);

Rx.interval(0).pipe(
    RxOp.take(100),
    RxOp.map(x => ({x})),
    RxOp.min((x,y) => x.x - y.x)
).subscribe(console.log);