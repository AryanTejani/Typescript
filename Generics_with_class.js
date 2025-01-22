"use strict";
class Dummy {
    constructor(iniContent) {
        this.content = iniContent;
    }
    getContent() {
        return this.content;
    }
    setcontent(cont) {
        this.content = cont;
    }
}
const dumy1 = new Dummy("Default");
// dumy1.setcontent("Hi there");
console.log(dumy1.getContent());
