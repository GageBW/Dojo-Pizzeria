function pizzaOven(crust, sauce, cheeses, toppings, cut) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    pizza.cut = cut;
    return pizza
}

function randomPizza() {
    var crusts = ["thin crust", "deep dish", "hand tossed"]
    var sauce = ["traditional", "marinara", "pesto"]
    var cheeses = ["mozzarella", "feta", "swiss", "cheddar"]
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken", "spinach", "tomato"]
    var cut = [4, 6, 8, 16]
    var pizza = {
        crust: crusts[Math.floor(Math.random() * crusts.length)],
        sauce: sauce[Math.floor(Math.random() * sauce.length)],
        cheeses: cheeses[Math.floor(Math.random() * cheeses.length)],
        toppings: toppings[Math.floor(Math.random() * toppings.length)],
        cut: cut[Math.floor(Math.random() * cut.length)]
    };
    return pizza
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"], 8);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"], 16);
var p3 = pizzaOven("thin crust", "pesto", ["swiss", "cheddar"], ["chicken", "spinach", "tomato"], 4);
console.log(p1);
console.log(p2);
console.log(p3);
var rp1 = randomPizza();
var rp2 = randomPizza();
console.log(rp1);
console.log(rp2);