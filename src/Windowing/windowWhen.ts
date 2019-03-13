import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


Rx.interval(100).pipe(
    RxOp.take(10),
    RxOp.windowWhen(() => Rx.interval(500)),
    RxOp.map((x, i) => x.pipe(
        RxOp.map((x) => `${i}: ${x}`)
    ))
).subscribe(x => x.subscribe(console.log));