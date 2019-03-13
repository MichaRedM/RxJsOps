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

let oA = new RX.Subject<number>();
let oB = new RX.Subject<string>();

oA.subscribe(x => console.log(`A: ${x}`));
oB.subscribe(x => console.log(`B: ${x}`));

oA.pipe(
    ops.sample(oB)
).subscribe(
    x => console.log(`R: ${x}`),
    console.error,
    () => console.log('done'),
);

oA.next(1);
oB.next('A');
oA.next(2);
oA.next(3);
oB.next('B');
oB.next('C');
oA.next(4);
oB.next('D');
oA.next(5);
oB.next('E');