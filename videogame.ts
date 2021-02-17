//Importación
import { Person, Profesion } from './person';
import { Platform, Devices } from './platform';

//Declaración
export enum Score { zero = 0, one, two, three, four, five, six, seven, eigth, nine, ten }

export class Videogame{
    //Declaración atributos
    private title: string;
    private releaseYear: number;
    private developers: Person[];
    private nacionality: string;
    private director: Person;
    private languages: string[];
    private platforms: Platform[];
    private price: number;
    private score: Score

    //Declaración constructor
    constructor(title:string, releaseYear:number, developers: Person[], nacionality:string, director: Person, languages: string[], platforms: Platform[], price: number, score: Score) {
        this.title = title
        this.releaseYear = releaseYear
        this.developers = developers
        this.nacionality = nacionality
        this.director = director
        this.languages = languages
        this.platforms = platforms
        this.price = price
        this.score = score        
    }

    //Métodos públicos - getter y setter
    public getTitle(): string{
        return this.title
    }

    public getReleaseYear(): number{
        return this.releaseYear
    }

    public getDevelopers(): Person[]{
        return this.developers
    }

    public getNacionality(): string{
        return this.nacionality
    }

    public getDirector(): Person{
        return this.director
    }

    public getLanguages(): string[]{
        return this.languages
    }

    public getPlatforms(): Platform[]{
        return this.platforms
    }

    public getPrice(): number{
        return this.price
    }

    public getScore(): Score{
        return this.score
    }

    public setTitle(title:string){
        this.title = title
    }

    public setReleaseYear(releaseYear: number){
        this.releaseYear = releaseYear
    }

    public setDevelopers(developers: Person[]){
        this.developers = developers
    }

    public setNacionality(nacionality: string){
        this.nacionality = nacionality
    }

    public setDirector(director: Person){
        this.director = director
    }

    public setLanguages(languages: string[]){
        this.languages = languages
    }

    public setPlatform(platforms: Platform[]){
        this.platforms = platforms
    }

    public setPrice(price: number){
        this.price = price
    }

    public setScore(score: Score){
        this.score = score
    }

    //Metodos públicos
    public isPlatform(platform: Platform):boolean{
        let result:boolean = false
        for (let i=0; i<this.platforms.length;i++){
            if (this.platforms[i].isPlatform(platform)){
                result = true
            }
        }
        return result
    }

    public isDeveloper(developer: Person):boolean{
        let result:boolean = false
        for (let i=0; i<this.developers.length;i++){
            if (this.developers[i].isPerson(developer)){
                result = true
            }
        }
        return result    
    }

    public isLanguage(language: string):boolean{
        let result:boolean = false
        for (let i=0; i<this.languages.length;i++){
            if (this.languages[i] == language){
                result = true
            }
        }
        return result    
    }

    public showAll(): string{
        let attribute: string = ""
        Object.keys(this).forEach(key => attribute += `${key} - ${this[key]}\n`)
        return attribute
    }

    public values(): string{
        let attribute: string = ""
        Object.keys(this).forEach(key => attribute += `${this[key]} - `)
        return attribute
    }
}
