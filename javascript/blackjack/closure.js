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

console.log(count1.increment());

// function counter(x = 0) {
//   this.n = 0;
//   this.x = x;
// };

// counter.prototype.increment = function(){
//   this.n++;
//   return this.x + this.n;
// };

// var count = new counter(5);

// console.log(count.increment());
// console.log(count.increment());


 
