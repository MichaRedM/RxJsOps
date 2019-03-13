import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';


const obs = Rx.of('a', 'b', 2, 'c', 'd', 1, 'f');
obs.pipe(
    RxOp.last()
).subscribe(console.log)

obs.pipe(
    RxOp.last(x => typeof x  === 'number', 'no number found')
).subscribe(console.log)