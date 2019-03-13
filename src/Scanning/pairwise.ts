import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(100).pipe(
    RxOp.pairwise()
).subscribe(console.log)