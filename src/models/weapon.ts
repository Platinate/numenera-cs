import { WEAPON_CATEGORY } from "../constants/types";

export default interface IWeapon {
    id:number;
    name: string;
    category: WEAPON_CATEGORY;
    modifier:number;
    damage:number;
}

export class Weapon implements IWeapon {
    id: number;
    name: string;
    category: WEAPON_CATEGORY;
    modifier:number;
    damage: number;

    /**
     *
     */
    constructor() {
        this.id = Math.ceil(Math.random()*100);
        this.name = '';
        this.category = "L";
        this.damage = 0;
        this.modifier = 0;
    }
}