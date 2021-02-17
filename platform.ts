export enum Devices { cartucho = "cartucho", tarjeta = "tarjeta", cd = "cd", dvd = "dvd", bluray = "bluray" }

export class Platform{
    //Declaración atributos
    private name: string
    private releaseYear: number
    private company: string
    private nBits: number
    private generation: string
    private hasHD: boolean
    private hdSize: number
    private hasInternetConnection: boolean
    private storageDevice: Devices
    private color: string

    //Declaración constructor
    constructor(name: string, releaseYear: number, company: string, nBits: number, generation: string,  hasHD: boolean, hdSize: number, hasInternetConnection: boolean, storageDevice: Devices, color: string) {
        this.name = name
        this.releaseYear = releaseYear
        this.company = company
        this.nBits = nBits
        this.generation = generation
        this.hasHD = hasHD
        this.hdSize = hdSize
        this.hasInternetConnection = hasInternetConnection
        this.storageDevice = storageDevice //use enum Devices
        this.color = color        
    }

    //Metodos públicos - getter y setter
    public getName():string{
        return this.name
    }

    public getReleaseYear(): number{
        return this.releaseYear
    }

    public getCompany(): string{
        return this.company
    }

    public getNBits(): number{
        return this.nBits
    }

    public getGeneration(): string{
        return this.generation
    }

    public getHasHD(): boolean{
        return this.hasHD
    }

    public getHDSize(): number{
        return this.hdSize
    }

    public getHasInternetConnection(): boolean{
        return this.hasInternetConnection
    }

    public getStorageDevice(): Devices{
        return this.storageDevice
    }

    public getColor(): string{
        return this.color
    }

    public setName(name: string){
        this.name = name
    }

    public setReleaseYear(releaseYear: number){
        this.releaseYear = releaseYear
    }

    public setCompany(company: string){
        this.company = company
    }

    public setNBits(nBits: number){
        this.nBits = nBits
    }

    public setGeneration(generation: string){
        this.generation = generation
    }

    public setHasHD(hasHD: boolean){
        this.hasHD = hasHD
    }

    public setHDSize(hdSize: number){
        this.hdSize = hdSize
    }

    public setHasInternetConnection(hasInternetConnection: boolean){
        this.hasInternetConnection = hasInternetConnection
    }

    public setStorageDevice(storageDevice: Devices){
        this.storageDevice = storageDevice
    }

    public setColor(color:string){
        this.color = color
    }

    //Metodo públicos
    public isPlatform(platform: Platform): boolean{
        let count: number = 0
        let own: string[] = Object.keys(this)
        
        for (let i=0; i<own.length; i++){            
            if (this[own[i]]==platform[own[i]]){
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