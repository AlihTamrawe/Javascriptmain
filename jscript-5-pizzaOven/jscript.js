/*function PizzaOven( n)
{
    var x=n;
    if(x>0){
    for(var i=1;i<=x;i++)
    {
        if((i%3==0)&&(i%5==0))
        {
            console.log("FizzBuzz");
        } 
       else
        if(i%5==0)
        {
            console.log("Buzz");
        }
        else
        if(i%3==0)
        {
            console.log("Fizz");
        }
         else
        {
            console.log(i);
        }
       
    }
}
else
        {
            console.log("out of posiytive range");
        }
}
var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);
function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);
*/
var pizza = {
    crustType: "deep dish",
    sauceType:"traditiona",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni", "sausage"]
}


function PizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};

    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var  allp = [];
allp.push(pizza)
console.log(pizza);
pizza = PizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],  ["mushrooms", "olives", "onions"]);
console.log(pizza);
allp.push(pizza)
pizza = PizzaOven("natural tossed", "Amic", ["mozzarella", "tomato"],  ["mushrooms", "pinaple", "hotdog"]);
   
console.log(pizza);
allp.push(pizza)



