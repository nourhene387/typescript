// Step 1: Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Step 2: Implement the Car class that implements Vehicle
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Step 3: Implement the start method
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Step 4: Create an instance of the Car class
  const myCar = new Car("Toyota", "CHR", 2020);
  
//
function processVehicle(vehicle: Vehicle) {
    console.log(`Processing ${vehicle.make} ${vehicle.model} from ${vehicle.year}`);
    vehicle.start();
}

  // Step 5: Call the start method to verify the behavior
  processVehicle (myCar)