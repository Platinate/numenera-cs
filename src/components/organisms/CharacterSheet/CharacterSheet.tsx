import React from "react";
import ICharacter from "../../../models/character";
import { Col, Divider, Input, InputNumber, Row, Tabs } from "antd";
import Pool from "../../molecules/Pool/Pool";
import ISkill, { Skill } from "../../../models/skill";
import {
  BarsOutlined,
  DeploymentUnitOutlined,
  FormOutlined,
  StarOutlined,
} from "@ant-design/icons";
import IAbility, { Ability } from "../../../models/ability";
import IWeapon, { Weapon } from "../../../models/weapon";
import ICypher, { Cypher } from "../../../models/cypher";

import "./CharacterSheet.css";
import Loading from "../../atoms/Loading/Loading";

const { TabPane } = Tabs;

const AbilityList = React.lazy(
  () => import("../../molecules/AbilityList/AbilityList")
);
const CombatTracking = React.lazy(
  () => import("../../molecules/CombatTracking/CombatTracking")
);
const CypherList = React.lazy(
  () => import("../../molecules/CypherList/CypherList")
);
const SkillList = React.lazy(
  () => import("../../molecules/SkillList/SkillList")
);

interface IProps {
  character: ICharacter;
  onValueChange: (name: string, value: any) => void;
  onSkillListChange: (newList: ISkill[]) => void;
  onAbilityListChange: (newList: IAbility[]) => void;
  onWeaponListChange: (newList: IWeapon[]) => void;
  onCypherListChange: (newList: ICypher[]) => void;
}

const CharacterSheet: React.FC<IProps> = ({
  character,
  onValueChange,
  onSkillListChange,
  onAbilityListChange,
  onWeaponListChange,
  onCypherListChange,
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
        <Col xs={6}>
          <p>EST UN</p>
        </Col>
        <Col xs={9}>
          <Input
            name="descriptor"
            value={character.descriptor}
            placeholder="Descriptor"
            onChange={handleOnChange}
          />
        </Col>
        <Col xs={9}>
          <Input
            name="type"
            value={character.type}
            placeholder="Type"
            onChange={handleOnChange}
          />
        </Col>
      </Row>
      <Row gutter={16} align="middle">
        <Col xs={4}>
          <p>QUI</p>
        </Col>
        <Col xs={20}>
          <Input name="focus" value={character.focus} placeholder="Focus" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={8}>
          <h4 style={{ textAlign: "center" }}>RANG</h4>
          <InputNumber
            style={{ width: "100%" }}
            value={character.tier}
            defaultValue={0}
            min={0}
            name="tier"
            onChange={(v) => onValueChange("tier", v)}
          />
        </Col>
        <Col xs={8}>
          <h4 style={{ textAlign: "center" }}>EFFORT</h4>
          <InputNumber
            style={{ width: "100%" }}
            value={character.effort}
            defaultValue={0}
            min={0}
            name="effort"
            onChange={(v) => onValueChange("effort", v)}
          />
        </Col>
        <Col xs={8}>
          <h4 style={{ textAlign: "center" }}>XP</h4>
          <InputNumber
            style={{ width: "100%" }}
            value={character.xp}
            defaultValue={0}
            min={0}
            name="xp"
            onChange={(v) => onValueChange("xp", v)}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={16} align="middle">
        <Col xs={24} sm={8}>
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
        <Col xs={24} sm={8}>
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
        <Col xs={24} sm={8}>
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
          <React.Suspense fallback={<Loading />}>
            <SkillList
              skills={character.skills}
              onSkillAdd={handleOnSkillAdd}
              onSkillsUpdate={handleOnSkillsUpdate}
            />
          </React.Suspense>
        </TabPane>
        <TabPane
          tab="Aptitudes"
          key="2"
          icon={<DeploymentUnitOutlined />}
          closable={false}
        >
          <React.Suspense fallback={<Loading />}>
            <AbilityList
              abilities={character.abilities}
              onAbilityAdd={handleOnAbilityAdd}
              onAbilitiesUpdate={handleOnAbilitiesUpdate}
            />
          </React.Suspense>
        </TabPane>
        <TabPane tab="Combat" key="3" icon={<BarsOutlined />} closable={false}>
          <React.Suspense fallback={<Loading />}>
            <CombatTracking
              character={character}
              handleOnWeaponAdd={handleOnWeaponAdd}
              handleOnWeaponsUpdate={handleOnWeaponUpdate}
              onRestChange={onValueChange}
            />
          </React.Suspense>
        </TabPane>
        <TabPane tab="Cyphers" key="4" icon={<BarsOutlined />} closable={false}>
          <React.Suspense fallback={<Loading />}>
            <CypherList
              cypherLimit={character.cypherLimit}
              cyphers={character.cyphers}
              onCypherAdd={handleOnCypherAdd}
              onCyphersUpdate={handleOnCypherUpdate}
            />
          </React.Suspense>
        </TabPane>
        <TabPane tab="Notes" key="5" icon={<FormOutlined />} closable={false}>
          <React.Suspense fallback={<Loading />}>
            <Input.TextArea
              value={character.note}
              name="note"
              onChange={handleOnChange}
            />
          </React.Suspense>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CharacterSheet;
