//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxiumPassengers = 5;
    this.passanger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }

  start() {
    if (this.fuel > 0) {
      console.log("Car starts!");
      return this.start == true;
    } else {
      console.log("Fuel is empty!");
      return this.start == false;
    }
  }

  scheduleService() {
    if (this.mileage > 30000) {
      console.log("Car needs maintenance");
      this.scheduleService = true;
      return this.scheduleService;
    }
  }

  loadPassenger() {
    if (this.passanger < this.maxiumPassengers) {
      console.log("Car has plenty of room!");
      return this.loadPassenger == true;
    } else {
      console.log("Car is at maximum capacity");
      return this.loadPassenger == false;
    }
  }
}
