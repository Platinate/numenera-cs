export default interface ICypher {
    id:number;
    name:string;
    level:number;
    description:string;
}

export class Cypher implements ICypher {
    id: number;
    name: string;
    level: number;
    description: string;

    /**
     *
     */
    constructor() {
        this.id = Math.ceil(Math.random()*100);
        this.name = '';
        this.level = 0;
        this.description = '';
    }

}