import * as RX from 'rxjs';
import * as ops from 'rxjs/operators'
declare global {
    interface String {
        replaceAt(index: number, replacement: string): string;
    }
}
String.prototype.replaceAt = function(index: number, replacement: string): string {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}



