
var eatsPlants = true;
var eatsAnimals = true;

if (eatsPlants && !eatsAnimals) {
	console.log("herbivore")
} else if (eatsAnimals && !eatsPlants) {
	console.log("carnivore")
} else if (eatsPlants&&eatsAnimals) {
	console.log("omnivore")
} else {
	console.log("undefined")
}

//the above is the same as the below, except the below uses ternary operators. the () after a ? basically acts like a &&.
var eatsPlants = true;
var eatsAnimals = true;

var category = eatsPlants? (eatsAnimals? "omnivore":"herbivore"):(eatsAnimals?"carnivore":undefined)

console.log(category);