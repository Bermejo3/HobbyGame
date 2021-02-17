import { HobbyGame } from "./hobbygame"
import { hobbygame } from "./testHobbyGame"

//Convertir en fichero json, leerlo y escribirlo

let output = JSON.stringify(hobbygame)

var fs = require("fs");

// fs.writeFileSync("hobbyGameBBDD.json", output)

let input = fs.readFileSync("hobbyGameBBDD.json", "utf8")

// console.log(JSON.parse(input).videogames);

let hobbygameInstanciado: HobbyGame = hobbygame.getInstance("hobbyGameBBDD.json")

console.log(hobbygameInstanciado.getVideogames());