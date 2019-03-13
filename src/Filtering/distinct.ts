import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of(1, 2, 3, 4, 1, 5).pipe(
    RxOp.map(x => ({x, y : 1})),
    RxOp.distinct(x => x.x)
).subscribe(console.log)