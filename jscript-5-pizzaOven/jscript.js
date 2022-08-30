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
    var i= parseInt(Math.random()*3) ;
    var i2= parseInt(Math.random()*2) ;
    pizza.crustType = crustType[i];
    pizza.sauceType = sauceType[i];
    pizza.cheeses = cheeses[i2];
    pizza.toppings = toppings[i2];
    return pizza;
    
}


var  crustType = ["hand tossed","natural tossed","deep dish"];
var  sauceType = ["marinara","Amic","traditiona","mazzarony","tuna"];
var  cheeses = [["mozzarella", "feta"],["mozzarella", "tomato"]];
var toppings = [["mushrooms", "olives", "onions"], ["mushrooms", "pinaple", "hotdog"]];

console.log(pizza);
pizza = PizzaOven(crustType,sauceType,cheeses,toppings);
console.log(pizza);

pizza = PizzaOven(crustType,sauceType,cheeses,toppings);
   
console.log(pizza);
pizza = PizzaOven(crustType,sauceType,cheeses,toppings);
   
console.log(pizza);



