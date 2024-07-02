//1 - Void
function withoutReturn():void {
    console.log("Esta função não retornam nada")
}
withoutReturn()

//2 - Callback com argumento
function greeting(name: string){
    return `Olá, ${name}`
}
function preGreeting(f: (name:string) => string, username:string){
    console.log("Preparando a função!")
    const greet = f(username)
    console.log(greet)
}
preGreeting(greeting, "Teste")

//Generic Functions
//Estratégia para quando o tipo de retorno é relacionado ao tipo do argumento. utiliza (T ou U)

function firstElement<T>(arr: T[]): T{
    return arr[0]
}
console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
//------------------------------------------------
function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObjects({name: "João"}, {age: 30, job: "Programador"})
console.log(newObject)
//------------------------------------------------
//Constraints nas Generic Functions
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b){ //maior valor
        biggest = a
    } else {
        biggest = b
    }
    return biggest
}
console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "4"))

//Especificar tipos de argumentos
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}
console.log(mergeArrays([1,2,3], [5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["teste", "testando"]))

//Parâmetros opcionais
function modernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá, ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}`
}
console.log(modernGreeting("Maria"))
console.log(modernGreeting("Pedro", "Dr."))

//Parâmetros Default
function somaDefault(n: number, m = 10): number{
    return n + m
}
console.log(somaDefault(10))
console.log(somaDefault(10, 12))

//Unknown
//Aceita qualquer tipo, porém não deixa algo ser executado se não houver validação de tipo
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if (typeof x === "number"){
        console.log("X é um número")
    }
}
doSomething(1)
doSomething([1,2,3])

//Tipo Never
//Semelhante ao void, não retorna nada. ex: retorno de erros
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}
//showErrorMessage("Algum erro!")

//Rest operator
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}
console.log(sumAll(1,2,3,4,5))

//Destructuring
function showProductDetails({name, price}: {name:string, price: number}): string{
    return `O nome do produto é ${name}`
}
const shirt = {name: "Camisa", price: 49.99}
console.log(showProductDetails(shirt))
