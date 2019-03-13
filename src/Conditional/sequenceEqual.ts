import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

let a = Rx.interval(10).pipe(RxOp.take(3));

a.pipe(
    RxOp.sequenceEqual(a)
).subscribe(x => console.log('a', x));



a.pipe(
    RxOp.sequenceEqual(Rx.of(0, 1, 2))
).subscribe(x => console.log('b', x));

