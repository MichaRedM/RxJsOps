import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.combineLatest(
    Rx.interval(500),
    Rx.interval(1000)
).subscribe(console.log)