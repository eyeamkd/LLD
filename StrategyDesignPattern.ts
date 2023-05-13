// So any feature that has multiple variants in it and if each variant is to be 
// used by multiple base classes then, we bind it to a common interface have it specifically 
// implemented and then do Dependency inversion on the base class with the interface 
// so that any child classes can call their own version of this function directly 

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