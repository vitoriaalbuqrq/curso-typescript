"use strict";
//Os modulos são a forma que temos para importar código em arquivos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1 - Importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//2 - Importando variaveis
const variable_js_1 = require("./variable.js");
console.log(variable_js_1.x);
//3 - multiplas importações
const multiples_js_1 = require("./multiples.js");
console.log(multiples_js_1.a);
console.log(multiples_js_1.b);
console.log((0, multiples_js_1.myFunction)());
//4 - Alias
const chargename_js_1 = require("./chargename.js");
console.log(chargename_js_1.someName);
//5 - import all
const mynumbers = __importStar(require("./numbers.js"));
console.log(mynumbers.n1);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User("Joao", 25);
console.log(joao);
