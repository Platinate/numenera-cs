import { useEffect, useState } from "react";
import "./App.css";
import ICharacter, { Character } from "../../../models/character";
import CharacterSheet from "../../organisms/CharacterSheet/CharacterSheet";
import ISkill from "../../../models/skill";
import IAbility from "../../../models/ability";
import { Button, Col, Row } from "antd";
import JsonFileLoader from "../../atoms/JsonFileLoader/JsonFileLoader";
import IWeapon from "../../../models/weapon";
import ICypher from "../../../models/cypher";
import IArtifact from "../../../models/artifact";
import logo from "../../../assets/images/R-white.png";

function App() {
  const [character, setCharacter] = useState<ICharacter>(new Character());

  useEffect(() => {
    const lastSaved = localStorage.getItem("character");
    if (lastSaved) setCharacter(JSON.parse(lastSaved));
  }, [character.id]);

  const handleOnValueChange = (name: string, value: any) => {
    let c = character;
    console.log(name, value);
    c = { ...c, [name]: value };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const handleOnSkillListChange = (skills: ISkill[]) => {
    let c = character;
    c = { ...c, skills: skills };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const handleOnAbilityListChange = (abilities: IAbility[]) => {
    let c = character;
    c = { ...c, abilities: abilities };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const handleOnWeaponListChange = (weapons: IWeapon[]) => {
    let c = character;
    c = { ...c, weapons: weapons };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const handleOnCypherListChange = (cyphers: ICypher[]) => {
    let c = character;
    c = { ...c, cyphers: cyphers };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const handleOnArtifactListChange = (artifacts: IArtifact[]) => {
    let c = character;
    c = { ...c, artifacts: artifacts };
    c.id = Math.ceil(Math.random() * 100);
    setCharacter(c);
    localStorage.setItem("character", JSON.stringify(c));
  };

  const exportCharacter = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(character)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  const loadCharacter = (data: string) => {
    const characterLoaded = JSON.parse(data);
    setCharacter({ ...new Character(), ...characterLoaded });
    localStorage.setItem("character", data);
  };

  return (
    <div className="App">
      <Row>
        <Col xs={24} style={{display:"flex",justifyContent:"center", marginBottom: 18}}>
          <img alt="logo" src={logo} style={{width: '90%'}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={24} lg={6}>
          <div
            className="save-control"
            style={{
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button type="primary" onClick={exportCharacter}>
              Exporter
            </Button>
            <JsonFileLoader onDataLoaded={loadCharacter} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CharacterSheet
            character={character}
            onValueChange={handleOnValueChange}
            onSkillListChange={handleOnSkillListChange}
            onAbilityListChange={handleOnAbilityListChange}
            onWeaponListChange={handleOnWeaponListChange}
            onCypherListChange={handleOnCypherListChange}
            onArtifactListChange={handleOnArtifactListChange}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
