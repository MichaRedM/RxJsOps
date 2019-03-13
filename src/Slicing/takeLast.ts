import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

const arr = []

for(let i = 0; i < 100; i++) arr.push(i);

Rx.from(arr).pipe(
    RxOp.takeLast(10)
).subscribe(console.log);