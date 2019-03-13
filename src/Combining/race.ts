import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.race(
    Rx.interval(400).pipe(RxOp.map(x => 'a:' + x), RxOp.tap(x => console.log('go ' + x))),
    Rx.interval(300).pipe(RxOp.map(x => 'b:' + x), RxOp.tap(x => console.log('go ' + x)), RxOp.delay(100)),
).subscribe(console.log);
