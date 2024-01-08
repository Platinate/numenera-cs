import { SKILL_LEVEL } from "../constants/types";

export default interface ISkill {
    id:number;
    name:string;
    skillLevel : SKILL_LEVEL;
}

export class Skill implements ISkill {
    id: number;
    name: string;
    skillLevel: SKILL_LEVEL;

    /**
     *
     */
    constructor() {
        this.id = Math.ceil(Math.random()*100);
        this.name = '';
        this.skillLevel = 'E';
    }
}