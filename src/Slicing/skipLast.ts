import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(50),
    RxOp.tap(x => console.log(`<= ${x}`)),
    RxOp.skipLast(10)
).subscribe(x => console.log(`=> ${x}`))