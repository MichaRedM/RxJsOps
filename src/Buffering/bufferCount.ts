import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(10),
    RxOp.bufferCount(3),
).subscribe(x => console.log('a:', x));


Rx.interval(100).pipe(
    RxOp.take(10),
    RxOp.bufferCount(3, 4),
).subscribe(x => console.log('b:', x));
