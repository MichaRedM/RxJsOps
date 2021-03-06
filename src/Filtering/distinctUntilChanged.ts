import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of(1, 1, 2, 3, 4, 1, 5).pipe(
    RxOp.map(x => ({x, y : 1})),
    RxOp.distinctUntilChanged((x,y) => x.x === y.x)
).subscribe(console.log)