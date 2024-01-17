import IAbility from "./ability";
import IArtifact from "./artifact";
import ICypher from "./cypher";
import ISkill from "./skill";
import IWeapon from "./weapon";

export default interface ICharacter {
    otherProgression: number;

    id:number;

    focus: string;
    name: string;
    descriptor: string;
    stuff:string;
    type: string;
    tier: number;
    effort: number;
    xp: number;
    recoveryBonus:number;

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
    weapons: IWeapon[];
    cyphers: ICypher[];
    artifacts: IArtifact[];

    cypherLimit: number;

    note:string;

    recovery:string;
    
    effortProgression: number;
    skillProgression: number;
    poolProgression: number;
    abilityProgression: number;

    armor:number;

    status:string;
}

export class Character implements ICharacter {
    id:number;
    descriptor: string;
    type: string;
    focus:string;
    stuff:string;
    tier: number;
    effort: number;
    xp: number;
    recoveryBonus:number;
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
    weapons: IWeapon[];
    cyphers: ICypher[];
    artifacts: IArtifact[];
    note:string;

    armor:number;

    recovery:string;

    status:string;

    cypherLimit: number;

    effortProgression: number;
    skillProgression: number;
    poolProgression: number;
    abilityProgression: number;

    disabilited: boolean;
    impaired: boolean;
    /**
     * 
     */
    constructor() {
        this.id = 0;
        this.descriptor = '';
        this.focus = '';
        this.type = '';
        this.stuff = '';
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
        this.recoveryBonus = 0;
        this.name = '';
        this.note = '';
        this.skills = [];
        this.abilities = [];
        this.weapons = [];
        this.cyphers= [];
        this.artifacts = [];

        this.recovery = '';
        this.status = '';

        this.abilityProgression = 0;
        this.poolProgression = 0;
        this.effortProgression = 0;
        this.skillProgression = 0;
        this.otherProgression = 0;

        this.armor = 0;

        this.cypherLimit = 0;

        this.disabilited = false;
        this.impaired = false;
    }
    otherProgression: number;
}