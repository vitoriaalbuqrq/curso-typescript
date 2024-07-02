//1 - Array
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
//Sintaxe mais antiga
var nums = [100, 200];
//Any - qualquer tipo satisfaz a variavel
var arr1 = [1, "teste", true];
//Tipo de parâmetro de funções
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//Tipo de retorno
function greeting(name) {
    return "Ola ".concat(name);
}
//Função anonima
setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
//Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordenada: " + coord.x);
    console.log("Y coordenada: " + coord.y);
}
//chave e valor devem ser correspondentes
//passCoordinates({nome: 1, sobrenome: 2})
passCoordinates({ x: 1, y: 2 });
//Props opcional
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
}
showNumbers(1, 2, 3);
showNumbers(1, 5);
//Validação
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
//Union types
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return "A fun\u00E7\u00E3o do usuario \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
function showCoords(obj) {
    console.log("x: ".concat(obj.x, " y: ").concat(obj.y, " z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 20,
    z: 30
};
showCoords(coordObj);
//Literal Types
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
//Non-null Assertion Operator
var p = document.getElementById("some-p");
//console.log(p!.innerText)
//Bigint
var n;
//n = 1
n = 1000n;
console.log(n);
