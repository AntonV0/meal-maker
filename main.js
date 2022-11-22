const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's meal is ${this._meal} for ${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.meal = "Pizza";
menu.price = 2.99;

console.log(menu);
/*
{
  _meal: 'Pizza',
  _price: 2.99,
  meal: [Setter],
  price: [Setter],
  todaysSpecial: [Getter]
}
*/
console.log(menu.todaysSpecial);
// Today's meal is Pizza for 2.99!
