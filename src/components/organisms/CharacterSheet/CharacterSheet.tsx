import React from "react";
import ICharacter from "../../../models/character";
import {
  Col,
  Collapse,
  Divider,
  Input,
  InputNumber,
  Row,
  Select,
  Tabs,
} from "antd";
import Pool from "../../molecules/Pool/Pool";
import ISkill, { Skill } from "../../../models/skill";
import {
  BarsOutlined,
  DeploymentUnitOutlined,
  FormOutlined,
  RiseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import IAbility, { Ability } from "../../../models/ability";
import IWeapon, { Weapon } from "../../../models/weapon";
import ICypher, { Cypher } from "../../../models/cypher";

import "./CharacterSheet.css";
import ProgressionTracking from "../../molecules/ProgressionTracking/ProgressionTracking";
import IArtifact, { Artifact } from "../../../models/artifact";
import ArtifactList from "../../molecules/ArtifactList/ArtifactList";
import AbilityList from "../../molecules/AbilityList/AbilityList";
import CombatTracking from "../../molecules/CombatTracking/CombatTracking";
import CypherList from "../../molecules/CypherList/CypherList";
import SkillList from "../../molecules/SkillList/SkillList";
import { FOCUSES, TYPES } from "../../../constants/constants";
import Counter from "../../atoms/Counter/Counter";

const { TabPane } = Tabs;
const { Panel } = Collapse;

interface IProps {
  character: ICharacter;
  onValueChange: (name: string, value: any) => void;
  onSkillListChange: (newList: ISkill[]) => void;
  onAbilityListChange: (newList: IAbility[]) => void;
  onWeaponListChange: (newList: IWeapon[]) => void;
  onCypherListChange: (newList: ICypher[]) => void;
  onArtifactListChange: (newList: IArtifact[]) => void;
}

const CharacterSheet: React.FC<IProps> = ({
  character,
  onValueChange,
  onSkillListChange,
  onAbilityListChange,
  onWeaponListChange,
  onCypherListChange,
  onArtifactListChange,
}) => {
  const handleOnChange = (evt: any) => {
    onValueChange(evt.target.name, evt.target.value);
  };

  const handleOnPoolChange = (name: string, value: number | null) => {
    if (!value) value = 0;
    onValueChange(name, value);
  };

  const handleOnSkillAdd = () => {
    character.skills.push(new Skill());
    onSkillListChange(character.skills);
  };

  const handleOnSkillsUpdate = (skills: ISkill[]) => {
    onSkillListChange(skills);
  };

  const handleOnAbilityAdd = () => {
    character.abilities.push(new Ability());
    onAbilityListChange(character.abilities);
  };

  const handleOnAbilitiesUpdate = (abilities: IAbility[]) => {
    onAbilityListChange(abilities);
  };

  const handleOnWeaponAdd = () => {
    character.weapons.push(new Weapon());
    onWeaponListChange(character.weapons);
  };

  const handleOnWeaponUpdate = (weapons: IWeapon[]) => {
    onWeaponListChange(weapons);
  };

  const handleOnCypherAdd = () => {
    character.cyphers.push(new Cypher());
    onCypherListChange(character.cyphers);
  };

  const handleOnCypherUpdate = (cyphers: ICypher[]) => {
    onCypherListChange(cyphers);
  };

  const handleOnArtifactAdd = () => {
    character.artifacts.push(new Artifact());
    onArtifactListChange(character.artifacts);
  };

  const handleOnArtifactUpdate = (artifacts: IArtifact[]) => {
    onArtifactListChange(artifacts);
  };

  return (
    <div className="CharacterSheet">
      <Row gutter={16} align="middle">
        <Col xs={24}>
          <Input
            name="name"
            value={character.name}
            placeholder="Name"
            onChange={handleOnChange}
          />
        </Col>
      </Row>
      <Row gutter={16} align="middle">
        <Col xs={6} md={3}>
          <p>EST UN</p>
        </Col>
        <Col xs={9} md={12}>
          <Input
            name="descriptor"
            value={character.descriptor}
            placeholder="Descriptor"
            onChange={handleOnChange}
          />
        </Col>
        <Col xs={9}>
          <Select
            value={character.type}
            placeholder="Type"
            style={{ width: "100%" }}
            onChange={(v) => onValueChange("type", v)}
            options={TYPES.map((f) => ({ value: f.key, label: f.name }))}
          />
        </Col>
      </Row>
      <Row gutter={16} align="middle">
        <Col xs={4} md={2}>
          <p>QUI</p>
        </Col>
        <Col xs={20} md={22}>
          <Select
            value={character.focus}
            placeholder="Focus"
            style={{ width: "100%" }}
            onChange={(v) => onValueChange("focus", v)}
            options={FOCUSES.map((f) => ({ value: f.key, label: f.name }))}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16,16]}>
        <Col xs={24} sm={8}>
          <div className="character-sheet__counter">
            <h4 style={{ textAlign: "center" }}>RANG</h4>
            <Counter onChange={(v) => onValueChange("tier", v)} initialValue={character.tier}/>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className="character-sheet__counter">
            <h4 style={{ textAlign: "center" }}>EFFORT</h4>
            <Counter onChange={(v) => onValueChange("effort", v)} initialValue={character.effort}/>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className="character-sheet__counter">
            <h4 style={{ textAlign: "center" }}>XP</h4>
            <Counter onChange={(v) => onValueChange("xp", v)} initialValue={character.xp}/>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16,16]} align="middle">
        <Col xs={24} sm={12}>
          <Pool
            name="PUISSANCE"
            onMaxPoolChange={(v) => handleOnPoolChange("mightPoolMaximum", v)}
            onEdgePoolChange={(v) => handleOnPoolChange("mightPoolEdge", v)}
            onCurrentPoolChange={(v) =>
              handleOnPoolChange("mightPoolCurrent", v)
            }
            current={character.mightPoolCurrent}
            max={character.mightPoolMaximum}
            min={character.mightPoolMinimum}
            edge={character.mightPoolEdge}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Pool
            name="CÉLÉRITÉ"
            onMaxPoolChange={(v) => handleOnPoolChange("speedPoolMaximum", v)}
            onEdgePoolChange={(v) => handleOnPoolChange("speedPoolEdge", v)}
            onCurrentPoolChange={(v) =>
              handleOnPoolChange("speedPoolCurrent", v)
            }
            current={character.speedPoolCurrent}
            max={character.speedPoolMaximum}
            min={character.speedPoolMinimum}
            edge={character.speedPoolEdge}
          />
        </Col>
        <Col xs={24} sm={{span: 12, offset: 6}}>
          <Pool
            name="INTELLECT"
            onMaxPoolChange={(v) =>
              handleOnPoolChange("intellectPoolMaximum", v)
            }
            onEdgePoolChange={(v) => handleOnPoolChange("intellectPoolEdge", v)}
            onCurrentPoolChange={(v) =>
              handleOnPoolChange("intellectPoolCurrent", v)
            }
            current={character.intellectPoolCurrent}
            max={character.intellectPoolMaximum}
            min={character.intellectPoolMinimum}
            edge={character.intellectPoolEdge}
          />
        </Col>
      </Row>
      <Tabs defaultActiveKey="1" style={{ marginTop: 10 }} hideAdd>
        <TabPane
          tab="Compétences"
          key="1"
          icon={<StarOutlined />}
          closable={false}
        >
          <SkillList
            skills={character.skills}
            onSkillAdd={handleOnSkillAdd}
            onSkillsUpdate={handleOnSkillsUpdate}
          />
        </TabPane>
        <TabPane
          tab="Aptitudes"
          key="2"
          icon={<DeploymentUnitOutlined />}
          closable={false}
        >
          <AbilityList
            abilities={character.abilities}
            onAbilityAdd={handleOnAbilityAdd}
            onAbilitiesUpdate={handleOnAbilitiesUpdate}
          />
        </TabPane>
        <TabPane tab="Combat" key="3" icon={<BarsOutlined />} closable={false}>
          <CombatTracking
            character={character}
            handleOnWeaponAdd={handleOnWeaponAdd}
            handleOnWeaponsUpdate={handleOnWeaponUpdate}
            onRestChange={onValueChange}
          />
        </TabPane>
        <TabPane
          tab="Équipement"
          key="4"
          icon={<BarsOutlined />}
          closable={false}
        >
          <Collapse bordered={false}>
            <Panel key="1" header="Inventaire">
              <Input.TextArea
                value={character.stuff}
                name="stuff"
                onChange={handleOnChange}
              />
            </Panel>
            <Panel
              key="2"
              style={{ padding: 0, margin: 0 }}
              header={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Cyphers</span>
                  <div>
                    <span style={{ marginRight: 8 }}>Limite : </span>
                    <InputNumber
                      name="cypherLimit"
                      value={character.cypherLimit}
                      onChange={(v) => onValueChange("cypherLimit", v!)}
                    />
                  </div>
                </div>
              }
            >
              <CypherList
                cypherLimit={character.cypherLimit}
                cyphers={character.cyphers}
                onCypherAdd={handleOnCypherAdd}
                onCyphersUpdate={handleOnCypherUpdate}
                onValueChange={onValueChange}
              />
            </Panel>
            <Panel key="3" header="Artefacts">
              <ArtifactList
                artifacts={character.artifacts}
                onArtifactAdd={handleOnArtifactAdd}
                onArtifactsUpdate={handleOnArtifactUpdate}
              />
            </Panel>
          </Collapse>
        </TabPane>
        <TabPane
          tab="Progression"
          key="5"
          icon={<RiseOutlined />}
          closable={false}
        >
          <ProgressionTracking
            onValueChange={onValueChange}
            otherProgression={character.otherProgression}
            abilityProgression={character.abilityProgression}
            poolProgression={character.poolProgression}
            skillProgression={character.skillProgression}
            effortProgression={character.effortProgression}
          />
        </TabPane>
        <TabPane tab="Notes" key="6" icon={<FormOutlined />} closable={false}>
          <Input.TextArea
            value={character.note}
            name="note"
            onChange={handleOnChange}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CharacterSheet;
