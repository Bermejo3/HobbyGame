export enum Profesion {developer = 133, tester = 100, manager = 545, director = 684}


export class Person{
    //Declaración de atributos
    private name: string;
    private nationality: string;
    private profesion: Profesion;
    private experienceYears: number;

    //Constructor
    constructor (name: string, nationality: string, profesion: Profesion, experienceYears: number){
        this.name = name;
        this.nationality = nationality;
        this.profesion = profesion;
        this.experienceYears = experienceYears
    }

    //Métodos públicos - Getter y Setter
    public getName():string{
        return this.name
    }

    public getNationality():string{
        return this.nationality
    }

    public getProfesion():Profesion{
        return this.profesion
    }

    public getExprerienceYears():number{
        return this.experienceYears
    }

    public setName(name:string){
        this.name = name
    }

    public setNationality(nationality: string){
        this.nationality = nationality
    }

    public setProfesion(profesion: Profesion){
        this.profesion = profesion
    }

    public setExperienceYears(experienceYears:number){
        this.experienceYears = experienceYears
    }

    //Metodos públicos
    public isPerson(person: Person): Boolean{
        let count: number = 0
        let own: string[] = Object.keys(this)
        
        for (let i=0; i<own.length; i++){            
            if (this[own[i]]==person[own[i]]){
                count++                
            }
        }
        return count==own.length
    }

    public attributeConsole(){
        let attribute: string = ""
        Object.keys(this).forEach(key => attribute += `${key} - ${this[key]}\n`)
        console.log(attribute);
    }

    public attribute():string{
        let attribute: string = ""
        Object.keys(this).forEach(key => attribute += `${key} - ${this[key]}\n`)
        return attribute
    }
}
