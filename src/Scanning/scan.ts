import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.interval(100).pipe(
    RxOp.take(20),
    RxOp.map(x => x + 1),
    RxOp.scan<number, { num: number, exp: string }>((acc, val: number) => ({ num: val, exp: `1+(${acc.exp})` }), { num: 0, exp: '0' }),
    RxOp.map(x => `${x.num}:=\t${x.exp}`)
).subscribe(console.log);


// Fibonacci
Rx.interval(0).pipe(
    RxOp.scan<any, { a: number, b: number }>((acc) => ({ a: acc.b, b: acc.a + acc.b }), { a: 1, b: 0 }),
    RxOp.pluck('b'),
    RxOp.takeWhile(x => x + 10 < Number.MAX_SAFE_INTEGER)
).subscribe(console.log)