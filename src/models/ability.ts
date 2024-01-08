interface IAbility {
    id: number;
    name: string;
    description: string;
}

export class Ability implements IAbility {
    id: number;
    name: string;
    description: string;

    /**
     *
     */
    constructor() {

        this.id = Math.ceil(Math.random() * 100);
        this.name = '';
        this.description = '';
    }

}

export default IAbility;