import { Videogame, Score } from './videogame';
import { Person, Profesion } from "./person";
import { Platform, Devices } from "./platform";

let razork = new Person("Razork", "Spain", Profesion.developer, 2)
let zanzarah = new Person("Zanzarah", "Serbia", Profesion.developer, 3)
let promisq = new Person("Promisq", "Croatia", Profesion.developer, 5)
let ocelote = new Person("Carlos Ocelote", "Germany", Profesion.director, 10)

let pc = new Platform("PC", 1950, "Mac", 64, "Gen4", false, 1024, true, Devices.cartucho, "negro");
let ps4 = new Platform("PS4", 2010, "Sony", 64, "Gen5", true, 1024, true, Devices.bluray, "white" )

let cyberpunk: Videogame = new Videogame("Cyberpunk", 2020, [razork, zanzarah, promisq], "Canada", ocelote, ["English, Spanish, Polish, French, Italian"], [pc, ps4], 80, Score.six);

console.log(cyberpunk.isPlatform(pc))
console.log(cyberpunk.showAll())
console.log(cyberpunk.isLanguage("German"));
console.log(cyberpunk.isDeveloper(ocelote));
console.log(cyberpunk.isDeveloper(razork));
console.log(cyberpunk.values());





