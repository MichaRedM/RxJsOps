import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of(1,2,3,4).pipe(
    RxOp.delay(5000)
).subscribe(console.log);