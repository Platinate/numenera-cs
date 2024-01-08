import IAbility from "./ability";
import ISkill from "./skill";
import IPool from "./skill";

export default interface ICharacter {

    id:number;

    focus: string;
    name: string;
    descriptor: string;
    type: string;
    tier: number;
    effort: number;
    xp: number;

    mightPoolMaximum: number;
    mightPoolCurrent: number;
    mightPoolMinimum: number;
    mightPoolEdge:number;

    speedPoolMaximum: number;
    speedPoolCurrent: number;
    speedPoolMinimum: number;
    speedPoolEdge:number;

    intellectPoolMaximum: number;
    intellectPoolCurrent: number;
    intellectPoolMinimum: number;
    intellectPoolEdge:number;

    skills: ISkill[];
    abilities: IAbility[];
}

export class Character implements ICharacter {
    id:number;
    descriptor: string;
    type: string;
    focus:string;
    tier: number;
    effort: number;
    xp: number;
    mightPoolMaximum: number;
    mightPoolCurrent: number;
    mightPoolMinimum: number;
    mightPoolEdge:number;
    speedPoolMaximum: number;
    speedPoolCurrent: number;
    speedPoolMinimum: number;
    speedPoolEdge:number;
    intellectPoolMaximum: number;
    intellectPoolCurrent: number;
    intellectPoolMinimum: number;
    intellectPoolEdge:number;
    name: string;
    skills: ISkill[];
    abilities: IAbility[];

    /**
     * 
     */
    constructor() {
        this.id = 0;
        this.descriptor = '';
        this.focus = '';
        this.type = '';
        this.tier = 0;
        this.effort = 0;
        this.xp = 0;
        this.mightPoolMaximum = 0;
        this.mightPoolCurrent = 0;
        this.mightPoolMinimum = 0;
        this.mightPoolEdge = 0;
        this.speedPoolMaximum = 0;
        this.speedPoolCurrent = 0;
        this.speedPoolMinimum = 0;
        this.speedPoolEdge = 0;
        this.intellectPoolMaximum = 0;
        this.intellectPoolCurrent = 0;
        this.intellectPoolMinimum = 0;
        this.intellectPoolEdge = 0;
        this.name = '';
        this.skills = [];
        this.abilities = [];
    }
}