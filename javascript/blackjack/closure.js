var counter = (function(n = 0) {
  return function() {
    n += 1;
    return n;
  }
});

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
  constructor (x = 0) {
    this.n = 0;
    this.x = x;
  }
  increment() {
    this.n++;
    return this.x + this.n;
  }
  decrement() {
      this.n--;
      return this.x + this.n;
  }
};

let count1 = new Counter(0);
let count2 = new Counter(5);

