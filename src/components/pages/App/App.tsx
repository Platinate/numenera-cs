import { useEffect, useState } from 'react';
import './App.css';
import ICharacter, { Character } from '../../../models/character';
import CharacterSheet from '../../organisms/CharacterSheet/CharacterSheet';
import ISkill from '../../../models/skill';
import IAbility from '../../../models/ability';
import { Button } from 'antd';
import JsonFileLoader from '../../atoms/JsonFileLoader/JsonFileLoader';
import IWeapon from '../../../models/weapon';
import ICypher from '../../../models/cypher';

function App() {

  const [character, setCharacter] = useState<ICharacter>(new Character());

  useEffect(() => {
    const lastSaved = localStorage.getItem("character");
    console.log(lastSaved);
    if (lastSaved)
      setCharacter(JSON.parse(lastSaved));
  }, [character.id])

  const handleOnValueChange = (name: string, value: any) => {
    let c = character;
    c = { ...c, [name]: value };
    c.id = Math.ceil(Math.random()*100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  }

  const handleOnSkillListChange = (skills: ISkill[]) => {
    let c = character;
    c = { ...c, skills: skills };
    c.id = Math.ceil(Math.random()*100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  }

  const handleOnAbilityListChange = (abilities: IAbility[]) => {
    let c = character;
    c = { ...c, abilities: abilities };
    c.id = Math.ceil(Math.random()*100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  }

  const handleOnWeaponListChange = (weapons: IWeapon[]) => {
    let c = character;
    c = { ...c, weapons: weapons };
    c.id = Math.ceil(Math.random()*100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  }

  const handleOnCypherListChange = (cyphers: ICypher[]) => {
    let c = character;
    c = { ...c, cyphers: cyphers };
    c.id = Math.ceil(Math.random()*100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  }

  const exportCharacter = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(character)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  }

  const loadCharacter = (data:string) => {
    const characterLoaded =  JSON.parse(data);
    setCharacter(characterLoaded);
    localStorage.setItem("character",data);
  }

  return (
    <div className="App">
      <div style={{marginBottom: 16, display: "flex", justifyContent:"space-around"}}>
        <Button type="primary" onClick={exportCharacter}>Exporter</Button>
        <JsonFileLoader onDataLoaded={loadCharacter}/>
      </div>
      <CharacterSheet character={character} onValueChange={handleOnValueChange} onSkillListChange={handleOnSkillListChange} onAbilityListChange={handleOnAbilityListChange} onWeaponListChange={handleOnWeaponListChange} onCypherListChange={handleOnCypherListChange} />
    </div>
  );
}

export default App;
