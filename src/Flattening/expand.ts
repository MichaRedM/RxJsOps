import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators'

Rx.of(1).pipe(
    RxOp.expand(x => x < 10 ? Rx.of(2 * x, 2 + x) : Rx.empty()),
).subscribe(console.log)