class X {
  private _myproperty: number = 0;
  get myproperty(): number {
    return this._myproperty;
  }
  set myproperty(value: number) {
    this._myproperty = value;
  }
}

const X1 = new X();
console.log(X1.myproperty);
X1.myproperty = 10;
console.log(X1.myproperty);
