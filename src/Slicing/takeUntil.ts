import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(10).pipe(
    RxOp.takeUntil(Rx.timer(500))
).subscribe(console.log);