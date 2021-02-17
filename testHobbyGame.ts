import { Videogame, Score } from './videogame';
import { Person, Profesion } from "./person";
import { Platform, Devices } from "./platform";
import { HobbyGame } from "./hobbygame";

let alberto= new Person("Alberto", "Spain", Profesion.developer, 1)
let cgoob = new Person("Cgoob", "Spain", Profesion.developer, 4)
let ibai= new Person("Ibai", "Spain", Profesion.developer, 1)
let razork = new Person("Razork", "Spain", Profesion.developer, 2)
let zanzarah = new Person("Zanzarah", "Serbia", Profesion.developer, 3)
let promisq = new Person("Promisq", "Croatia", Profesion.developer, 5)
let ocelote = new Person("Carlos Ocelote", "Germany", Profesion.director, 10)

let pc = new Platform("PC", 1950, "Mac", 64, "Gen4", false, 1024, true, Devices.cartucho, "negro");
let ps4 = new Platform("PS4", 2010, "Sony", 64, "Gen5", true, 1024, true, Devices.bluray, "white" )
let xbox = new Platform("XBOX", 1994, "Microsoft", 64, "Gen5", true, 1024, true, Devices.dvd, "green")
let nintendo = new Platform("Nintendo", 1984, "Nintendo", 32, "Gen4", false, 1024, true, Devices.tarjeta, "red")

let cyberpunk: Videogame = new Videogame("Cyberpunk", 2020, [razork, zanzarah, promisq], "Canada", ocelote, ["English, Spanish, Polish, French, Italian"], [pc, ps4, xbox], 80, Score.six);
let ffvii: Videogame = new Videogame("Final Fantasy VII", 1994, [alberto, cgoob], "Japon", ocelote, ["English", "Japanese"], [ps4, pc], 30, Score.ten)
let mario: Videogame = new Videogame("SuperMario", 1990, [promisq], "Japan", ocelote, ["Japanese"], [nintendo], 70, Score.four)
let pokemon: Videogame = new Videogame("Pokemon", 2000, [ibai, razork, zanzarah], "Japan", ocelote, ["Japanese", "English", "Spanish"], [pc, nintendo], 75, Score.eigth)
let lol: Videogame = new Videogame("League of Legends", 2010, [razork, zanzarah, promisq], "EEUU", ocelote, ["English", "Spanish"], [pc], 7, Score.one)

let hobbygame: HobbyGame = new HobbyGame([cyberpunk, ffvii, mario, pokemon, lol])

console.log(hobbygame.allPrice());
console.log(hobbygame.pricePlatform(ps4));
console.log(hobbygame.videogameApproved());
console.log(hobbygame.videogameDeveloper(razork));
console.log(hobbygame.videogameLanguages("Japanese"));
console.log(hobbygame.videogamePlatformLanguage(pc, "Spanish"));





