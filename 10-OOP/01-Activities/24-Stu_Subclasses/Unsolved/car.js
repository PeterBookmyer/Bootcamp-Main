// TODO: Import the parent class
const Vehicle = require("./vehicle");
// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    super(id, 4, "beep");
    this.color = color;
    this.passengers = passengers;
  }

  useHorn() {
    
  }

  checkPassengers(passengers) {
    if (carPassengers.length > 4) {
      console.log("Car only has 4 seats");
    }
    else {
      console.log("not enough room")
    }
  }
}

const carPassengers = [
  "Aristotle",
  "Confucius",
  "Socrates",
  "Lao-Tzu",
  "Plato",
];

const car = new Car(15, "blue", carPassengers);

console.log("---CAR---");
car.printInfo();
car.useHorn();
car.checkPassengers();
