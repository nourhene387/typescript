// Step 2: Implement the Car class that implements Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Step 3: Implement the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Step 4: Create an instance of the Car class
var myCar = new Car("Toyota", "CHR", 2020);
//
function processVehicle(vehicle) {
    console.log("Processing ".concat(vehicle.make, " ").concat(vehicle.model, " from ").concat(vehicle.year));
    vehicle.start();
}
// Step 5: Call the start method to verify the behavior
processVehicle(myCar);
