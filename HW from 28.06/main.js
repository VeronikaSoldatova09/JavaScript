// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(value) {
//     this._radius = value;
//   }

//   get diameter() {
//     return 2 * this._radius;
//   }

//   calculateArea() {
//     return Math.PI * this._radius ** 2;
//   }
//   calculateC() {
//     return 2 * Math.PI * this._radius;
//   }
// }

// const circle = new Circle(10);
// console.log(circle.radius);
// console.log(circle.diameter);
// console.log(circle.calculateArea());
// console.log(circle.calculateC());



// class Clock {
//   constructor({ time }) {
//     this.time = time;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.time
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// let clock = new Clock({time: 'h:m:s'});
// clock.start();

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);