"use strict";
function showProductDetails(product) {
    console.log(`Nome do produto: ${product.name} preço: ${product.price}`);
    if (product.isAvaliable) {
        console.log("O produto está disponível!");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaliable: true
};
console.log(showProductDetails(shirt));
const fusca = {
    brand: 'VH',
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const joao = {
    name: "João",
    age: 20
};
console.log(joao);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "Genki Dama"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//6 - ReadOnlyArray
let myArray = ["Maça", "Laranja", "Banana"];
//myArray[3] = "Mamão" //Não pode modificar, spenas atraves de metodos (map)
myArray.forEach(item => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return ` Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anoTherUser = ["teste", 14];
console.log(anoTherUser[0]);
anoTherUser[0] = "João";
//8 - Tuplas com readOnly
function showNumbers(numbers) {
    console.log(numbers[0]);
}
showNumbers([1, 2]);
