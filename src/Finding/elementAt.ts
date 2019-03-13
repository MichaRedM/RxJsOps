import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of([], [[]], [[], []], [{}]).pipe(
    RxOp.elementAt(3)
).subscribe(console.log);

Rx.of([], [[]], [[], []], [{}]).pipe(
    RxOp.elementAt<any>(5, 'index not found lol')
).subscribe(console.log)