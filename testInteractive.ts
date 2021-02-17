import { Videogame, Score } from './videogame';
import { Person, Profesion } from "./person";
import { Platform, Devices } from "./platform";
import { HobbyGame } from "./hobbygame";
import { razork, zanzarah, promisq, ocelote, pc, hobbygame } from "./testHobbyGame"

const pro = require("prompt") 

pro.start()

pro.get(['title', 'releaseYear', "nacionality", "idioma1", "idioma2", "precio", "nota"], function (err, result) {
    if(err){
        console.log(err);
    } else {
        var fs = require("fs");

        let arrayVideogames: HobbyGame = hobbygame.getInstance("hobbyGameBBDD.json")
        
        let resultado: Videogame = new Videogame (result.title, result.releaseYear, [razork, zanzarah], result.nacionality, promisq, [result.idioma1, result.idioma2], [pc], result.precio, result.nota )

        arrayVideogames.getVideogames().push(resultado)        
        let output = JSON.stringify(arrayVideogames)
        fs.writeFileSync("hobbyGameBBDD.json", output)
        console.log(`${result.title} ha sido añadido al fichero`);

    }
});
