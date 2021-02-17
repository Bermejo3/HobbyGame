import { Videogame, Score } from './videogame';
import { Person, Profesion } from "./person";
import { Platform, Devices } from "./platform";

export class HobbyGame {
    private videogames: Videogame[]

    constructor (videogames: Videogame[]){
        this.videogames = videogames
    }

    public getVideogames():Videogame[]{
        return this.videogames
    }

    public setVideogames(videogames: Videogame[]){
        this.videogames = videogames
    }

    //Métodos públicos
    public pricePlatform(platform: Platform):number{
        let result: number = 0;

        for (let i=0; i<this.videogames.length; i++){
            if (this.videogames[i].isPlatform(platform)){
                result += this.videogames[i].getPrice()
            }
        }
        return result
    }

    public allPrice():number{
        let result:number=0;
    
        for (let i=0; i<this.videogames.length; i++){
            result += this.getVideogames()[i].getPrice()
        }
        return result
    }

    public videogameLanguages(languages: string): Videogame[]{
        let result: Videogame[] = [];

        for (let i=0; i<this.videogames.length; i++){
            if (this.videogames[i].isLanguage(languages)){
                result.push(this.videogames[i])
            }
        }
        return result
    }

    public videogameDeveloper(developer: Person): Videogame[]{
        let result: Videogame[] = [];

        for (let i=0; i<this.videogames.length; i++){
            if (this.videogames[i].isDeveloper(developer)){
                result.push(this.videogames[i])
            }
        }
        return result
    }

    public videogamePlatformLanguage(platform:Platform, language: string):Videogame[]{
        let result: Videogame[] = [];

        for (let i=0; i<this.videogames.length; i++){
            if (this.videogames[i].isPlatform(platform) && this.videogames[i].isLanguage(language)){
                result.push(this.videogames[i])
            }
        }
        return result
    }

    public videogameApproved(): Videogame[]{
        let result: Videogame[] = [];

        for (let i=0; i<this.videogames.length; i++){
            if (this.videogames[i].getScore() >= 5){
                result.push(this.videogames[i])
            }
        }
        return result
    }
}