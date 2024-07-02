// 1 - Campos em classe
//Inicializar sem valores (!)
class User {
    name!: string
    age!: number
}

const maria = new User()
maria.name = "Maria"
console.log(maria)

//2 - Constructor
class NewUser {
    name
    age

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
}
const joao = new NewUser("joao", 22)

//3 - Campo Readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}
const fusca = new Car("Fusca")

//4 - Herança e super
class Machine {
    name

    constructor(name:string){
        this.name = name
    }
}
const trator = new Machine("Trator")

class killerMachine extends Machine{
    guns

    constructor(name:string, guns: number){
        super(name)
        this.guns = guns
    }
}
const destroyer = new killerMachine("Destroyer", 4)

//5 - Metodos
class Dwarf {
    name

    constructor(name:string){
        this.name = name
    }

    greeting(){
        console.log("Hey")
    }
}
const jimy = new Dwarf("Jimy")
jimy.greeting()
console.log(jimy)

//6 - THIS
class Truck {
    model
    hp

    constructor(model:string, hp:number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`${this.model} ${this.hp}`)
    }
}
const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)
volvo.showDetails()

//7 - Getters
class Person {
    name
    surname

    constructor(name:string, surname: string){
        this.name = name
        this.surname = surname
    }
    get fullName(){
        return this.name + " " + this.surname
    }
}
const p = new Person("maria", "silva")
console.log(p.fullName)

//8 - Herança de interfaces / implements
interface showTitle{
    itemTitle(): string
}
class blogPost implements showTitle{
    title

    constructor(title: string){
        this.title = title
    }
    itemTitle(): string {
        return `O titulo do post é ${this.title}`
    }
}
const mypost = new blogPost("Hello")
mypost.itemTitle()

//9 - Override de métodos
class Base{
    someMethod(){
        console.log("alguma coisa")
    }
}
class Nova extends Base{
    someMethod(){
        console.log("testando outra coisa")
    }
}
const myObj = new Nova()
myObj.someMethod()

//10 - Visibilidade
//public - default, qualquer metodo de classe pai, está acessivel na classe filha
class C{
    x = 10
}
const cInstance = new C()
console.log(cInstance.x)

//protect - pode ser utilizadas apenas em subclasses
class E {
    protected x = 10
}
class F extends E{
    showX(){
        console.log("X: " + this.x)
    }
}
const fInstance = new F()
//console.log(fInstance.x) // não é possivel acessar
console.log(fInstance.showX())

//private - só podem ser acessados na classe que os definiu
class PrivateClass{
    private name = "Private"

    showName(){
        return this.name
    }

    private privateMethod(){
        console.log("Metodo privado")
    }

    showPrivateMethod(){
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()
//console.log(pObj.name)
console.log(pObj.showName())
pObj.showPrivateMethod()

//11 - Static members
class StaticMembers {
    static prop = "Teste static"
}
console.log(StaticMembers.prop)

//12 - Generic class
class Item<T, U> {
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }

    get showFirst(){
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("caixa", "surpresa")
console.log(newItem)
console.log(newItem.showFirst)

//13 - Parameters Properties
class ParametersProps{
    constructor(public name: string, private qty: number, private price: number){
        this.name = name
        this.qty = qty
        this.price = price
    }
    get showQty(){
        return `Qtd total ${this.qty}`
    }
}

//14 - Class Expressions - classe anonima. encapsula a classe em uma variavel
const myClass = class<T>{
    name

    constructor(name: T){
        this.name = name
    }
}
const pessoa = new myClass("John")
console.log(pessoa)
console.log(pessoa.name)

//15 - Abstract class - molde de outra classe
abstract class AbstractClass {
    abstract showName(): void
}

class AbstractExample extends AbstractClass{
    name: string
    
    constructor(name:string){
        super()
        this.name = name
        
    }
    showName(): void {
        throw new Error("Method not implemented.")
    }
}

const newObj = new AbstractExample("maria");
newObj.showName()

//16 - Relação entre classes
//Quando as classes são identicas pode criar baseada na outra, o TS não reclama
class Dog {
    name!: string
}
class Cat {
    name!: string
}
const doguinho: Dog = new Cat()
console.log(doguinho)
