import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of(1, 2, 3, 1).pipe(RxOp.single(x => x === 3)).subscribe(console.log, console.error)