import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(0).pipe(
    RxOp.take(100),
    RxOp.map(x => [x]),
    RxOp.find(x => x[0] === 4)
).subscribe(console.log);


Rx.of(0, 1, 2, 5, 1).pipe(
    RxOp.map(x => [x]),
    RxOp.find(x => x[0] === 1)
).subscribe(console.log);