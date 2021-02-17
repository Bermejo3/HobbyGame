import { Videogame, Score } from './videogame';
import { Person, Profesion } from "./person";
import { Platform, Devices } from "./platform";
import { HobbyGame } from "./hobbygame";

export let alberto= new Person("Alberto", "Spain", Profesion.developer, 1)
export let cgoob = new Person("Cgoob", "Spain", Profesion.developer, 4)
export let ibai= new Person("Ibai", "Spain", Profesion.developer, 1)
export let razork = new Person("Razork", "Spain", Profesion.developer, 2)
export let zanzarah = new Person("Zanzarah", "Serbia", Profesion.developer, 3)
export let promisq = new Person("Promisq", "Croatia", Profesion.developer, 5)
export let ocelote = new Person("Carlos Ocelote", "Germany", Profesion.director, 10)
 
export let pc = new Platform("PC", 1950, "Mac", 64, "Gen4", false, 1024, true, Devices.cartucho, "negro");
export let ps4 = new Platform("PS4", 2010, "Sony", 64, "Gen5", true, 1024, true, Devices.bluray, "white" )
export let xbox = new Platform("XBOX", 1994, "Microsoft", 64, "Gen5", true, 1024, true, Devices.dvd, "green")
export let nintendo = new Platform("Nintendo", 1984, "Nintendo", 32, "Gen4", false, 1024, true, Devices.tarjeta, "red")
 
export let cyberpunk: Videogame = new Videogame("Cyberpunk", 2020, [razork, zanzarah, promisq], "Canada", ocelote, ["English, Spanish, Polish, French, Italian"], [pc, ps4, xbox], 80, Score.six);
export let ffvii: Videogame = new Videogame("Final Fantasy VII", 1994, [alberto, cgoob], "Japon", ocelote, ["English", "Japanese"], [ps4, pc], 30, Score.ten)
export let mario: Videogame = new Videogame("SuperMario", 1990, [promisq], "Japan", ocelote, ["Japanese"], [nintendo], 70, Score.four)
export let pokemon: Videogame = new Videogame("Pokemon", 2000, [ibai, razork, zanzarah], "Japan", ocelote, ["Japanese", "English", "Spanish"], [pc, nintendo], 75, Score.eigth)
export let lol: Videogame = new Videogame("League of Legends", 2010, [razork, zanzarah, promisq], "EEUU", ocelote, ["English", "Spanish"], [pc], 7, Score.one)

export let hobbygame: HobbyGame = new HobbyGame([cyberpunk, ffvii, mario, pokemon, lol])

// console.log(hobbygame.allPrice());
// console.log(hobbygame.pricePlatform(ps4));
// console.log(hobbygame.videogameApproved());
// console.log(hobbygame.videogameDeveloper(razork));
// console.log(hobbygame.videogameLanguages("Japanese"));
// console.log(hobbygame.videogamePlatformLanguage(pc, "Spanish"));





