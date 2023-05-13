
interface Drive{
    drive();
}

class SportDrive implements Drive{
    drive() {
       console.log("Sports Drive");
    } 
} 

class TurboDrive implements Drive{
    drive() {
       console.log("Turbo Drive");
    }
}

class Vehicle implements Drive {

    private readonly VehicleDrive : Drive; 

    constructor(vehicleDrive : Drive) {
        this.VehicleDrive = vehicleDrive;
    }

    drive() {
         this.VehicleDrive.drive();
    }
} 

class SportVehicle extends Vehicle {
    constructor() {
        super( new SportDrive());
    }
} 

class TurboVehicle extends Vehicle {
   
    constructor() {
        super(new TurboDrive());
    }
} 

const turboVehicle : TurboVehicle = new TurboVehicle();
turboVehicle.drive(); // this will call the TurboDrive method 