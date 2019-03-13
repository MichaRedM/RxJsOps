import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(500).pipe(
    RxOp.take(11),
    RxOp.map(x => 10 - x),
    RxOp.endWith('Takeoff'),
).subscribe(console.log)