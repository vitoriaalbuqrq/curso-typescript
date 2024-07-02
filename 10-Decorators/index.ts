//Decorators podem adicionar funcionalidades extras a classes e funções
function myDecorator(){
    console.log("Iniciando decorador!")

    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log("Executando decorator")
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()
    testing(){
        console.log("Testando execução do método")
    }
}
const myObj = new myClass();
myObj.testing()

//Multiplos decorators
function a(){
    return function( 
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor){
        
        console.log("Executou a")
    }
}
function b(){
    return function( 
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor){
        
        console.log("Executou b")
    }
}

class MultipleDecorators {
    @a()
    @b()
    testing(){
        console.log("Terminando execução")
    }
}
const multiple = new MultipleDecorators()
multiple.testing() 

//Decorator de classe
function classDec(constructor: Function){
    console.log(constructor.name);
    if(constructor.name === "User"){
        console.log("criando usuario!")
    }
}
@classDec 
class User{
    name

    constructor(name: string){
        this.name = name
    }
}
const maria = new User("Maria")
console.log(maria)

//Decorator de método
function enumerable(value: boolean){
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor){
            descriptor.enumerable = value
        }
}

class Machine{
    name 
    constructor(name: string){
        this.name = name
    }

    @enumerable(false)
    showName(){
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}
const trator = new Machine("Trator")
console.log(trator.showName())

//Accessor decorator
class Monster{
    name?
    age?

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`
    }
    @enumerable(true)
    get showAge(){
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)
console.log(charmander)

//Property decorator
function formatNumber() {
    return function (target: Object, propertyKey:string){
        let value: string
        
        const getter = function(){
            return value
        }
        const setter = function(newVal: string){
            //00001
            value = newVal.padStart(5, "0") //adicionar 5 casas com valores 0
        }
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id:string){
        this.id = id
    }
}
const newItem = new ID("1")
console.log(newItem)
console.log(newItem.id)

//Class Decorator
//Exemplo: criação de data de cada objeto
function createdDate(created: Function){
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    //Para acessar a data
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}
@createdDate
class Pen{
    id

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(newBook.createdAt)
console.log(pen)

//Exemplo: Verificar se usuario ja realizou um post, permitindo apenas um post por usuario
function checkIfUserPosted(){
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor){
            const childFunction = descriptor.value
            //console.log(childFunction)
            descriptor.value = function(...args: any[]){
                if(args[1] === true){
                    console.log("Usuario já postou!")
                } else { 
                    return childFunction.apply(this, args)
                }
            }
            return descriptor
        }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usuario: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)

//Exemplo: Property Decorator
function Max(limit:number){
    return function(target: Object, propertyKey: string){
        let value: string

        const getter = function(){
            return value
        }
        const setter = function(newVal: string){
            if(newVal.length > limit){
                console.log(`O valor deve ter no máximo ${limit} digitos`)
                return
            }else {
                value = newVal
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        })
    }
}

class Admin{
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}
let pedro = new Admin("pedroadmin12345") 
let lee = new Admin("lee")
console.log(lee)