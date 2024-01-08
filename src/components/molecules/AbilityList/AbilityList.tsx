import React from "react";
import IAbility from "../../../models/ability";
import { Button } from "antd";
import AbilityItem from "../../atoms/AbilityItem/AbilityItem";

interface IProps {
    abilities: IAbility[];
    onAbilityAdd: () => void;
    onAbilitiesUpdate: (abilities:IAbility[]) => void;
}

const AbilityList : React.FC<IProps> = ({abilities,onAbilityAdd,onAbilitiesUpdate}) => {

    const handleOnAbilityNameChange = (id:number,value:string) => {
        const abilityIndex = abilities.findIndex(s => s.id === id);
        if(abilityIndex > -1) {
            abilities[abilityIndex].name = value;
        }
        onAbilitiesUpdate(abilities);
    }

    const handleOnAbilityDescriptionChange = (id:number, value:string) => {
        const abilityIndex = abilities.findIndex(s => s.id === id);
        if(abilityIndex > -1) {
            abilities[abilityIndex].description = value;
        }
        onAbilitiesUpdate(abilities);
    }

    const handleOnAbilityDelete = (id:number) => {
        const list = abilities.filter(a => a.id !== id);
        onAbilitiesUpdate(list);
    }


    return (
        <div className="AbilityList">
            <Button type="primary" onClick={onAbilityAdd} style={{marginBottom: 10}}>Ajouter aptitude</Button>
            {abilities.map(ab => <AbilityItem key={ab.id} ability={ab} onAbilityDelete={handleOnAbilityDelete} onAbilityNameChange={handleOnAbilityNameChange} onAbilityDescriptionChange={handleOnAbilityDescriptionChange}/>)}
        </div>
    );
}

export default AbilityList;