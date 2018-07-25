var counter = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0));

console.log(counter(2));
console.log(counter(2));



 
// function counter(x = 0) {
//   this.n = 0;
//   this.x = x;
//   console.log("counter" + this.n);
// };

// counter.prototype.increment = function(){
//   this.n++;
//   console.log("increment: " + this.n);
//   return this.x + this.n;
// };

// var count = new counter(5);

// console.log(count.increment());
// console.log(count.increment());

class Counter {
  constructer (x) {
    this.x = x;
    this.n = 0;
  }
  increment() {
    this.n++;
    console.log("increment: " + this.n);
    console.log(this.x)
    return this.x + this.n;
  }
  decrement() {
    this.n--;
    console.log("increment: " + this.n);
    return this.x + this.n;
  }
};

let count1 = new Counter(5);
let count2 = new Counter(0);

console.log(count1.x)

// console.log(count1.increment());
// console.log(count1.increment());
