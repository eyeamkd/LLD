class Pizza {
  public Toppings: Topping[];
  public Name: string;
  public Type: Food;
  public Cost : number;

  constructor(name: string, type: Food, cost: number) {
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

  printToppings(){
    this.Toppings.forEach(topping => console.log(`${topping.Name} :`, `${topping.Type}`))
  }

  getDescription(){
    console.log("Pizza Name :", this.Name),
    console.log("Toppings : "), 
    this.printToppings();
    console.log("Total Cost: ", this.Cost);
  }
}

type Food = "VEG" | "NON-VEG";

type Topping = {
  Name: string;
  Cost: number;
  Type: Food;
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
    if (this._basePizza.Type == "VEG") {
      if (this._topping.Type == "NON-VEG") {
        this._basePizza.Type = "NON-VEG";
      }
    }
  }

  add() {
    return this._basePizza;
  }
}

const MushroomTopping: Topping = {
  Name: "Mushroom",
  Cost: 70,
  Type: "VEG",
};

const PepperoniTopping: Topping = {
  Name: "Pepperoni",
  Cost: 90,
  Type: "NON-VEG",
};

const ExtraCheeseTopping: Topping = {
  Name: "ExtraCheese",
  Cost: 90,
  Type: "VEG",
};

let newPizza: Pizza = new Pizza("Margharita", "VEG", 200);
newPizza = new PizzaToppingDecorator(newPizza, MushroomTopping).add();
newPizza = new PizzaToppingDecorator(newPizza, PepperoniTopping).add();
newPizza.addDiscount(40);
newPizza = new PizzaToppingDecorator(newPizza, ExtraCheeseTopping).add();
newPizza = new PizzaToppingDecorator(newPizza, ExtraCheeseTopping).add();
newPizza.getDescription();
