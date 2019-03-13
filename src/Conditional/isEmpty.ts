import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.of().pipe(RxOp.isEmpty()).subscribe(x => console.log('a', x));

Rx.of(1).pipe(RxOp.isEmpty()).subscribe(x => console.log('b', x));