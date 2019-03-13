import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(500).pipe(
    RxOp.take(11),
    RxOp.startWith('I will count','now to 10:'),
).subscribe(console.log)