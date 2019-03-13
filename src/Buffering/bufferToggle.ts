import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(100),
    RxOp.bufferToggle(Rx.interval(500), x => Rx.interval(x * 100)),
).subscribe(console.log);
