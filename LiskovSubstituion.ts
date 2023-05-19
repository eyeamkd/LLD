/**
 * You are designing a system that manages different types of bank accounts, 
 * such as checking accounts, savings accounts, and credit card accounts. 
 * Each account has a balance property that represents the current balance in the account. 
 * You need to implement a method withdraw that allows users to withdraw money from their accounts.

However, some types of accounts have additional rules or constraints for withdrawals. 
For example, a savings account may have a limit on the number of withdrawals per month,
 or a credit card account may have a minimum payment that must be made before a withdrawal 
 can be processed.

How can you apply the Liskov Substitution Principle to implement the withdraw method 
in a way that allows for additional rules or constraints to be added to specific types 
of accounts without affecting the correctness of the system as a whole? 
Can you provide an example implementation of how the system can be designed to be 
more maintainable and extensible?


 */

interface BankAccount{
    CheckBalance():number
    Deposit(amount : number):number 
    Withdrawl(amount : number) : number
}

class SavingAccount implements BankAccount { 

    private MaxiumWithdrawlsPerMonth : number; 
    private CurrentWithdrawls : number = 0;
    private Balance : number = 0;

    constructor(maxWithdrawlsPerMonth : number) {
        this.MaxiumWithdrawlsPerMonth = maxWithdrawlsPerMonth
        
    }

    CheckBalance(): number {
        throw new Error("Method not implemented.")
    }

    Deposit(amount: number): number {
        throw new Error("Method not implemented.")
    }

    Withdrawl(amount: number): number{ 
        if(this.CurrentWithdrawls >= this.MaxiumWithdrawlsPerMonth){
            // donot withdraw 
        }
        // withdraw
        throw new Error("Method not implemented.")
    }
}

class CreditAccount implements BankAccount{ 
    private MaxiumWithdrawlsPerMonth : number = 0;
    private CurrentWithdrawls : number = 0;
    private Balance : number = 0;

    CheckBalance(): number {
        throw new Error("Method not implemented.")
    }
    Deposit(amount: number): number {
        throw new Error("Method not implemented.")
    }
    Withdrawl(amount: number) : number{ 
        // custom credit account withdrawl logic
        throw new Error("Method not implemented.")
    }

}

class CheckAccount implements BankAccount{ 
    private MaxiumWithdrawlsPerMonth : number = 0; 
    private CurrentWithdrawls : number = 0;
    private Balance : number = 0; 

    CheckBalance(): number {
        throw new Error("Method not implemented.")
    }
    Deposit(amount: number): number {
        throw new Error("Method not implemented.")
    }
    Withdrawl(amount: number) : number { 
        // custom checking account withdrawl logic 
        throw new Error("Method not implemented.")
    }

}
