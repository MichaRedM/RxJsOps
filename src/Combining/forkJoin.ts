import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.forkJoin(
    Rx.interval(100).pipe(RxOp.take(10)),
    Rx.of('A', 'B'),
).subscribe(console.log)