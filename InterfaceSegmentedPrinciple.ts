/**
 * Make interfaces in such a way that the class that inherits these interfaces 
 * implements them completely
 * 
 * Suppose you are designing a software system that includes a user authentication module. 
 * The authentication module will be used by several other modules in the system,
 *  including a user profile module, a billing module,
 *  and a messaging module.

How would you apply the Interface Segregation Principle to design the interfaces for the user authentication module,
 and ensure that the other modules only depend on the interfaces that they actually use?
 */

//User Authentication Module:
// 1. Takes in credentials and needs to authenticate

interface Authentication {
    Authenticate(): Boolean;
} 

class TokenBasedAuthentication implements Authentication{

    private readonly Token: String;

    constructor(token: String) {
       this.Token = token;
    }

    Authenticate(): Boolean {
        //use this.token to perform authentication
        throw new Error("Method not implemented.");
    }

}

class CookieBasedAuthentication implements Authentication{

    private readonly Cookie: String;
    /**
     *
     */
    constructor(cookie:String) {
       this.Cookie = cookie;
    }

    Authenticate(): Boolean {
        // use cookie given to perform authentication
        throw new Error("Method not implemented.");
    }

}

class EmailPasswordAuthentication implements Authentication{
    private readonly Email : String; 
    private readonly Password : String; 

    private readonly params : String[];
    /**
     *
     */
    constructor(email:String, password:String) {
        this.Email = email;
        this.Password = password; 
        this.params =  [email, password];
    }
    
     Authenticate(): Boolean {
        // email password authentication code
        throw new Error("Method not implemented.");
    }

}


// We can have different types of Authentication 

interface UserAuthentication{
    
}
