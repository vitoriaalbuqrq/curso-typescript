//Typeof type guard
function sum(a:number | string, b:number | string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    }else{
        console.log("Impossivel realizar a soma!")
    }
}
sum("4", "5")
sum(3, 2)

//Checando se valor existe
function operations(arr: number[], operation?: string | undefined){
    if(operation){
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        }else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    }else {
        console.log("Por favor, defina uma operação")
    }
}
operations([2,4,3])
operations([2,4,3], "sum")
operations([2,4,3], "multiply")

//Operador instanceof
//Ex: verifica qual o tipo de usuario (user ou superuser) para tratar diferente
class User {
    name

    constructor(name: string){
        this.name = name
    }
}
class SuperUser extends User {
    constructor(name:string){
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

function userGreeting(user: Object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    }else if(user instanceof User){
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(jhon)
userGreeting(paul)

//Operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}
const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else {
        console.log("O cachorro é um SRD")
    }
}
showDogDetails(turca)
showDogDetails(bob)


function review(review:number|boolean){
    if(!review){
        console.log('Não avaliou o produto')
    }
    else{

        if(typeof review === "number"){
            switch(review){
            case 1:
                console.log("Ruim")
                break
            case 2:
                console.log("razoável")
                break
            case 3:
                console.log("bom")
                break
            case 4:
                console.log("muito bom")
                break
            case 5:
                console.log("excelente")
                break
            }
        }
    }
}
review(5)
review(false)