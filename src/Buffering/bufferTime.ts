import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(10),
    RxOp.bufferTime(400),
).subscribe(console.log);
