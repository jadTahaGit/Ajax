var myJSON = {};

myJSON.car1 = "black";

console.log(myJSON);
// VM1085:1 {car1: 'black'}

myJSON.car2 = "red";

console.log(myJSON);
// VM1143:1 {car1: 'black', car2: 'red'}

myJSON.car3 = "green";

console.log(myJSON);
// VM1209:1 {car1: 'black', car2: 'red', car3: 'green'}

// --------------------------------------------------
// -------------------------------Another way to make the objects is with arrays:--------------------------
// --------------------------------------------------

var myJson2 = { car: ["blue", "black"] };
console.log(myJson2);

// --------------------------------------------------
//----------------Another way to make:---------------
// --------------------------------------------------

var myJson3 = {
  car1: {
    color: "black",
    model: "BMW92",
  },
  car2: {
    color: "black",
    model: "Benz",
  },
};

console.log("");
