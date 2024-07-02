//Constraint em Generics
function showProductName<T extends {name:string}>(obj: T){
    return `O nome do produto é: ${obj.name}`
}
//deve ter a propriedade name obrigatorio
const myobj = {name: "Porta", cor:"Branca"}

//Interfaces com Generics
interface MyObject<T, U>{
    name: string
    wheels: T
    engine: U
}
type Car = MyObject<number, number>
type Pen = MyObject<boolean, boolean>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false}

//Type Parameters
/*function getSomeKey<T, K extends keyof T> (obj: T, key: K){
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
    hd: '2TB',
    ram: '32GB'
}
console.log(getSomeKey(server, 'ram'))*/
// console.log(getSomeKey(server, 'hd'))

//Keyof type operator


