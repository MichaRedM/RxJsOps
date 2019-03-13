import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

const openings = new Rx.Subject();
const closingSelector = new Rx.Subject();
const obs = new Rx.Subject();

obs.pipe(
    RxOp.take(10),
    RxOp.windowToggle(openings, () => closingSelector),
    RxOp.map((x, i) => x.pipe(
        RxOp.map((x) => `${i}: ${x}`)
    ))
).subscribe(x => x.subscribe(console.log));


obs.next(1);
openings.next();
obs.next(2);
obs.next(3);
obs.next(4);
openings.next();
obs.next(5);
obs.next(6);
closingSelector.next();
obs.next(7);
