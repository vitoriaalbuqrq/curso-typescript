var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1 - Void
function withoutReturn() {
    console.log("Esta função não retornam nada");
}
withoutReturn();
//2 - Callback com argumento
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
function preGreeting(f, username) {
    console.log("Preparando a função!");
    var greet = f(username);
    console.log(greet);
}
preGreeting(greeting, "Teste");
//Generic Functions
//Estratégia para quando o tipo de retorno é relacionado ao tipo do argumento. utiliza (T ou U)
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//------------------------------------------------
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "João" }, { age: 30, job: "Programador" });
console.log(newObject);
//------------------------------------------------
//Constraints nas Generic Functions
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) { //maior valor
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "4"));
//Especificar tipos de argumentos
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
//Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1, ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name);
}
console.log(modernGreeting("Maria"));
console.log(modernGreeting("Pedro", "Dr."));
//Parâmetros Default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 12));
//Unknown
//Aceita qualquer tipo, porém não deixa algo ser executado se não houver validação de tipo
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething(1);
doSomething([1, 2, 3]);
