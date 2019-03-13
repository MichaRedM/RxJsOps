import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of([], [[]], [{}], {}).pipe(
    RxOp.every(x => typeof x === 'object')
).subscribe(x => console.log('A', x));

Rx.of([], [[]], [{}], 1).pipe(
    RxOp.every(x => typeof x === 'object')
).subscribe(x => console.log('B', x));