import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(10).pipe(
    RxOp.skip(50)
).subscribe(console.log)