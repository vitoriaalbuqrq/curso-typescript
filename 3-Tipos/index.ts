//1 - Array
let numbers: number[] = [1, 2, 3]
numbers.push(5)
console.log(numbers[2])

//Sintaxe mais antiga
const nums: Array<number> = [100, 200]

//Any - qualquer tipo satisfaz a variavel
const arr1: any = [1, "teste", true]

//Tipo de parâmetro de funções
function soma(a: number, b: number){
    console.log(a + b)
}
soma(4, 5)

//Tipo de retorno
function greeting(name: string) : string{
    return `Ola ${name}`
}

//Função anonima
setTimeout(function(){
    const sallary: number = 1000
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000)


//Tipos de objetos
function passCoordinates(coord: {x: number, y: number}){
    console.log("X coordenada: " + coord.x)
    console.log("Y coordenada: " + coord.y)
}
//chave e valor devem ser correspondentes
//passCoordinates({nome: 1, sobrenome: 2})
passCoordinates({x: 1, y: 2})

//Props opcional
function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
}

showNumbers(1, 2, 3)
showNumbers(1, 5)

//Validação
function advancedGreeting(firstName: String, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}

//Union types
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("500")

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado"
    }
    return `A função do usuario é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//Types alias

type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}


//Interfaces
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj:Point){
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 20,
    z: 30
}

showCoords(coordObj)

//Literal Types
function showDirection(direction: "left" | "right" | "center"){
    console.log(`A direção é: ${direction}`)
}
showDirection("left")

//Non-null Assertion Operator
const p = document.getElementById("some-p")
//console.log(p!.innerText)

//Bigint
let n: bigint
n = 1000n
console.log(n)

//Symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")