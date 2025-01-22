"use strict";
class X {
    constructor() {
        this._myproperty = 0;
    }
    get myproperty() {
        return this._myproperty;
    }
    set myproperty(value) {
        this._myproperty = value;
    }
}
const X1 = new X();
console.log(X1.myproperty);
X1.myproperty = 10;
console.log(X1.myproperty);
