import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';

Rx.zip(
    Rx.of('Peter', 'Anna', 'Hans', 'Torsten'),
    Rx.of('Müller', 'Kahn', 'Beck'),
    Rx.interval(0),
    (vorname, nachname, id) => ({id, vorname, nachname})
).subscribe(console.log)
