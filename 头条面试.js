// let a = new Foo() //a.id -> 1
// let b = new Foo() //b.id -> 2


function Foo () {
    this.id = Foo.idIndex++;
}
Foo.idIndex = 1
let a = new Foo();
console.log(a);
let b = new Foo();
console.log(b);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const Foo = (function(){
    let idIndex = 1;
    return function(){
        this.id = idIndex++;
    }
})()
let a = new Foo();
console.log(a);
let b = new Foo();
console.log(b);

////////////////////////////////////////////////////////////////////////////////////////////////////////

const Foo = (function(){
    let idIndex = 1;
    return function(){
      // console.log(this instanceof Foo)
    if (this instanceof Foo) {
    // 使用了new 会自动返回对象~
    this.id = idIndex++;
    } else {
    // 没有使用new，我们帮它返回~
    return {
        id: idIndex++
    }
    }
}
})()
let a = new Foo();
console.log(a); // {id: 1}
let b = Foo();
console.log(b); // {id: 2}
let c = Foo();
console.log(c); // {id: 3}
let d = new Foo();
console.log(d); // {id: 4}
