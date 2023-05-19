/**
 * 1. Single Responsibility --> Only one reason to change 
 * 2. Open Closed --> 
 * 3. Liskov substituion 
 * 4. Inversion of Control 
 * 5. Dependency Injection 
 */ 

// Single Responsibilty Principle 

class User { 
    
    private _email : string = '';

    public get email() : string {
        return this._email;
    }

    public set email(v : string) {
        this._email = v;
    }
    
    private _name : string = '';

    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    constructor() {
        
    }

    validateUser(){

    } 

    saveUser(){
        
    }

    createUser(){
        
    }
}