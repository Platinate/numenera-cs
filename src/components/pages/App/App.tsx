import { useEffect, useState } from "react";
import "./App.css";
import ICharacter, { Character } from "../../../models/character";
import CharacterSheet from "../../organisms/CharacterSheet/CharacterSheet";
import { Button, Col, Row } from "antd";
import JsonFileLoader from "../../atoms/JsonFileLoader/JsonFileLoader";
import logo from "../../../assets/images/R-white.png";

function App() {
  const [character, setCharacter] = useState<ICharacter>(new Character());

  useEffect(() => {
    const lastSaved = localStorage.getItem("character");
    if (lastSaved) setCharacter(JSON.parse(lastSaved));
  }, [character.id]);

  const handleOnValueChange = (name: string, value: any) => {
    let c = character;
    c = { ...c, [name]: value };
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
    link.download = `personnage_${Date.now().toString()}.json`;

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
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
