class Dummy<T> {
  private content: T;
  constructor(iniContent: T) {
    this.content = iniContent;
  }
  getContent(): T {
    return this.content;
  }
  setcontent(cont: T) {
    this.content = cont;
  }
}

const dumy1 = new Dummy<string>("Default");
// dumy1.setcontent("Hi there");
console.log(dumy1.getContent());
