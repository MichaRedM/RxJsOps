import * as RX from 'rxjs';
import * as ops from 'rxjs/operators'


const obs = new RX.Observable(o => {
    let i: number = 0;
    const intervall = setInterval(() => {
        o.next(i++ + '');
    }, 1000);
    return () => clearInterval(intervall);
});

obs.pipe(
    ops.expand(
        x =>  {
            let s = 0;
            console.log(`go ${x}`);
            return RX.interval(300).pipe(
                ops.take(10),
                ops.map(() => `${x} ${s++}`)
                );
            }
        )
    ).subscribe(
    x => console.log('[1]', x),
    x => console.error('[1]', x),
    () => console.log('[1]', 'completed'),
);
