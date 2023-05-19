abstract class BasePizza {
    public Toppings: Topping[];
    public Name: string;
    public Type: boolean;
    public Cost: number; 

    constructor(name: string, type: boolean, cost: number) {
        this.Name = name;
        this.Type = type;
        this.Toppings = [];
        this.Cost = cost;
    }

    addDiscount(discount: number) {
        if (this.Cost < discount) {
          this.Cost = 0;
        } else {
          this.Cost = this.Cost - discount;
        }
      }
    
      printToppings() {
        this.Toppings.forEach((topping) =>
          console.log(`${topping.Name} :`, `${topping.Type}`)
        );
      }
    
      getFoodType = (type: boolean) => (type ? "VEG" : "NON-VEG");
    
      getDescription() {
        console.log("Pizza Name :", this.Name),
          console.log("Toppings : "),
          this.printToppings();
        console.log("Total Cost: ", this.Cost);
        console.log("Pizza Type : ", this.getFoodType(this.Type));
      }

}


class Pizza extends BasePizza {
  constructor(name: string, type: boolean, cost: number) {
    super(name, type, cost);
  }
} 

type Topping = {
  Name: string;
  Cost: number;
  Type: boolean;
};

const toppingCost: number = 100;

class PizzaToppingDecorator {
  private readonly _basePizza: Pizza;
  private readonly _topping: Topping;

  constructor(basePizza: Pizza, topping: Topping) {
    this._basePizza = basePizza;
    this._topping = topping;
    this._basePizza.Toppings.push(this._topping);
    this._basePizza.Cost += this._topping.Cost;
    this._basePizza.Type = this._basePizza.Type && this._topping.Type;
  }

  add() {
    return this._basePizza;
  }
}

const MushroomTopping: Topping = {
  Name: "Mushroom",
  Cost: 70,
  Type: true,
};

const PepperoniTopping: Topping = {
  Name: "Pepperoni",
  Cost: 90,
  Type: false,
};

const ExtraCheeseTopping: Topping = {
  Name: "ExtraCheese",
  Cost: 90,
  Type: true,
};


let newPizza: Pizza = new Pizza("Margharita", true, 200);
newPizza = new PizzaToppingDecorator(newPizza, MushroomTopping).add();
newPizza = new PizzaToppingDecorator(newPizza, PepperoniTopping).add();
newPizza.addDiscount(40);
newPizza = new PizzaToppingDecorator(newPizza, ExtraCheeseTopping).add();
newPizza = new PizzaToppingDecorator(newPizza, ExtraCheeseTopping).add();
newPizza.getDescription();
