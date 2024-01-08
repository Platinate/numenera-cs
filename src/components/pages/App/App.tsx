import { useEffect, useState } from 'react';
import './App.css';
import ICharacter, { Character } from '../../../models/character';
import CharacterSheet from '../../organisms/CharacterSheet/CharacterSheet';
import ISkill from '../../../models/skill';
import IAbility from '../../../models/ability';

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

  return (
    <div className="App">
      <CharacterSheet character={character} onValueChange={handleOnValueChange} onSkillListChange={handleOnSkillListChange} onAbilityListChange={handleOnAbilityListChange} />
    </div>
  );
}

export default App;
