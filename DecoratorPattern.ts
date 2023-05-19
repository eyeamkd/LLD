class Pizza {
    public Toppings : Topping[];
    public Name : string; 
    public Type : Food 

    constructor(name: string, type: Food, cost: number) {
        this.Name = name;
        this.Type = type;
        this.Toppings = [];
        this.Cost = cost;
      }
    
      get Cost(): number {
        return this.Cost;
      }

      set Cost (newcost : number){
        this.Cost = newcost;
      }

      addDiscount(discount : number){
            if(this.Cost < discount){
                this.Cost = 0;
            } else{
                this.Cost = this.Cost - discount;
            }
      }

} 

type Food = 'VEG' | 'NON-VEG'

type Topping = {
    Name : string;
    Cost : number;
    Type  : Food;
}

const toppingCost : number = 100;

class PizzaToppingDecorator {

    private readonly _basePizza : Pizza; 
    private readonly _topping : Topping;

    constructor(basePizza : Pizza, topping : Topping) {
        this._basePizza = basePizza; 
        this._topping = topping;
        this._basePizza.Toppings.push(this._topping); 
        this._basePizza.Cost += this._topping.Cost;
    } 

    make(){
        return this._basePizza;
    }
} 


const MushroomTopping  : Topping = {
    Name : 'Mushroom',
    Cost : 70,
    Type : 'VEG'
}

const PepperoniTopping : Topping = {
    Name: 'Pepperoni',
    Cost: 90,
    Type : 'NON-VEG'
}


class PizzaGenerator {  
    public main(){
        let newPizza : Pizza = new Pizza("Margharita",'VEG', 200);
        newPizza =  new PizzaToppingDecorator(newPizza, MushroomTopping).make();
        newPizza = new PizzaToppingDecorator(newPizza, PepperoniTopping).make();
        newPizza.addDiscount(40);

    }
}