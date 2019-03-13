import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(10),
    RxOp.buffer(Rx.interval(500)),
).subscribe(console.log);
