import * as RX from 'rxjs';
import * as ops from 'rxjs/operators'
String.prototype.replaceAt = function(index: number, replacement: string): string {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
declare global {
    interface String {
        replaceAt(index: number, replacement: string): string;
    }
}

let a: string = '';
let b: string = '';
let c: string = '';

let st = 10;


// let sampleInterval = new RX.Subject<void>();
// RX.interval(st).subscribe(x => sampleInterval.next());

RX.interval(1).pipe(
    ops.take(100),
    ops.scan((acc) => acc + 1, -1),
    ops.tap(x => {
        a += (x % 10)
        b += (x % st === 0) ? (x % 10) : '-';
        c += '-';
    }),
    ops.sampleTime(st),
    ops.tap(x => {
        c = c.replaceAt(c.length - 1, String(x % 10));
    }),
).subscribe(
    undefined,
    console.error,
    () => {
        console.log(a);
        console.log(b);
        console.log(c);
    }
);
