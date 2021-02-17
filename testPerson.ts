//Importacion
import { Person, Profesion } from "./person"

//inicio test

let persona= new Person("Alberto", "Spain", Profesion.manager, 1)
let persona2 = new Person("Cgoob", "Spain", Profesion.developer, 4)
let persona3= new Person("Alberto", "Spain", Profesion.manager, 1)

console.log(persona.getProfesion())

console.log(persona.getName())

persona.setProfesion(Profesion.developer)
console.log(persona.getProfesion())

console.log(persona.getProfesion()*100)
console.log(persona.isPerson(persona))
console.log(persona.isPerson(persona2))

console.log(persona.isPerson(persona3))

persona.attributeConsole()
console.log(persona.attribute());

