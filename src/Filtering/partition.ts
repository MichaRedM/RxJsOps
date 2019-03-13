import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

// Is equal to pipe the obs twice and filter it. It will subscribe also to times

const [even, odd] = RxOp.partition((x: number) => x % 2 === 0)(Rx.interval(100).pipe(RxOp.tap(console.log)))

even.subscribe(x => console.log('even:', x));
odd.subscribe(x => console.log('odd:', x));