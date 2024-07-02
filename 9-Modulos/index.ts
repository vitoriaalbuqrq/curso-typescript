//Os modulos são a forma que temos para importar código em arquivos

//1 - Importação de arquivos
import importGreet from "./greet.js";
importGreet()

//2 - Importando variaveis
import { x } from "./variable.js";
console.log(x)

//3 - multiplas importações
import {a, b, myFunction} from "./multiples.js"
console.log(a)
console.log(b)
console.log(myFunction())

//4 - Alias
import { someName as name} from "./chargename.js";
console.log(name)

//5 - import all
import * as mynumbers from './numbers.js'
console.log(mynumbers.n1)

//6 - importando tipos
import { Human } from "./mytypes.js";
class User implements Human{
    name
    age

    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
}
const joao = new User("Joao", 25);
console.log(joao)