//1 - tipo de objeto para função com Interface
interface Product {
    name: string
    price: number
    isAvaliable?: boolean
}

function showProductDetails(product: Product){
    console.log(`Nome do produto: ${product.name} preço: ${product.price}`)
    if(product.isAvaliable){
        console.log("O produto está disponível!")
    }
}
const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaliable:true
}
console.log(showProductDetails(shirt))

//2 - Readonly
//Podem ser alterados apenas uma vez, na criação do novo dado
interface Car {
     brand: string
     readonly wheels: number
}

const fusca:Car = {
    brand: 'VH',
    wheels: 4
}
console.log(fusca)
//fusca.wheels = 5 //não é possivel alterar a propriedade

//3 - Index Signature
//Utilizamos quando não sabemos o nome das chaves, mas ja sabemos quais os tipos de um objeto ou array
interface CoordObject {
    [index: string]: number
}
let coords: CoordObject = {
    x: 10
}
coords.y = 15
console.log(coords)

//4 - Herança 
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human{
    superpowers: string[]
}

const joao: Human = {
    name: "João",
    age: 20
}
console.log(joao)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["kamehameha", "Genki Dama"]
}
console.log(goku)

//5 - Intersectionn Types
interface Character {
    name: string
}
interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}
console.log(arnold)
console.log(arnold.caliber)

//6 - ReadOnlyArray
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]
//myArray[3] = "Mamão" //Não pode modificar, spenas atraves de metodos (map)
myArray.forEach(item => {
    console.log("Fruta: " + item)
});
myArray = myArray.map((item) => {
    return ` Fruta: ${item}`
})
console.log(myArray)

//7 - Tuplas
type fiveNumbers = [number, number, number,number, number]
const myNumberArray: fiveNumbers = [1,2,3,4,5]
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]

type nameAndAge = [string, number]
const anoTherUser:nameAndAge = ["teste", 14]
console.log(anoTherUser[0])
anoTherUser[0] = "João"

//8 - Tuplas com readOnly
function showNumbers(numbers: readonly [number, number]){
    console.log(numbers[0])
}
showNumbers([1,2])
