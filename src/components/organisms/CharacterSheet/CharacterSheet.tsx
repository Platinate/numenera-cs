import React from "react";
import ICharacter from "../../../models/character";

import "./CharacterSheet.css";
import { Col, Divider, Input, InputNumber, Row, Tabs } from "antd";
import Pool from "../../molecules/Pool/Pool";
import SkillList from "../../molecules/SkillList/SkillList";
import ISkill, { Skill } from "../../../models/skill";
import { DeploymentUnitOutlined, StarOutlined } from "@ant-design/icons";
import AbilityList from "../../molecules/AbilityList/AbilityList";
import IAbility, { Ability } from "../../../models/ability";

interface IProps {
    character: ICharacter;
    onValueChange: (name: string, value: any) => void;
    onSkillListChange: (newList: ISkill[]) => void;
    onAbilityListChange: (newList: IAbility[]) => void;
}

const CharacterSheet: React.FC<IProps> = ({ character, onValueChange, onSkillListChange, onAbilityListChange }) => {

    const handleOnChange = (evt: any) => {
        onValueChange(evt.target.name, evt.target.value);
    }

    const handleOnPoolChange = (name: string, value: number | null) => {
        if (!value) value = 0;
        onValueChange(name, value);
    }

    const handleOnSkillAdd = () => {
        character.skills.push(new Skill());
        onSkillListChange(character.skills);
    }

    const handleOnSkillsUpdate = (skills: ISkill[]) => {
        onSkillListChange(skills);
    }

    const handleOnAbilityAdd = () => {
        character.abilities.push(new Ability());
        onAbilityListChange(character.abilities);
    }

    const handleOnAbilitiesUpdate = (abilities: IAbility[]) => {
        onAbilityListChange(abilities);
    }

    return (
        <div className="CharacterSheet">
            <Row gutter={16} align="middle">
                <Col xs={24}  >
                    <Input name="name" value={character.name} placeholder="Name" onChange={handleOnChange} />
                </Col>
            </Row>
            <Row gutter={16} align="middle">
                <Col xs={6}>
                    <p>EST UN</p>
                </Col>
                <Col xs={9}  >
                    <Input name="descriptor" value={character.descriptor} placeholder="Descriptor" onChange={handleOnChange} />
                </Col>
                <Col xs={9}  >
                    <Input name="type" value={character.type} placeholder="Type" onChange={handleOnChange} />
                </Col>
            </Row>
            <Row gutter={16} align="middle">
                <Col xs={4}>
                    <p>QUI</p>
                </Col>
                <Col xs={20}  >
                    <Input name="focus" value={character.focus} placeholder="Focus" />
                </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
                <Col xs={8}>
                    <h4 style={{textAlign:"center"}}>RANG</h4>
                    <InputNumber style={{width:"100%"}} value={character.tier} defaultValue={0} min={0} name="tier" onChange={(v) => onValueChange("tier",v)}/>
                </Col>
                <Col xs={8}>
                    <h4 style={{textAlign:"center"}}>EFFORT</h4>
                    <InputNumber style={{width:"100%"}} value={character.effort} defaultValue={0} min={0} name="effort" onChange={(v) => onValueChange("effort",v)}/>

                </Col>
                <Col xs={8}>
                    <h4 style={{textAlign:"center"}}>XP</h4>
                    <InputNumber style={{width:"100%"}} value={character.xp} defaultValue={0} min={0} name="xp" onChange={(v) => onValueChange("xp",v)}/>
                </Col>
            </Row>
            <Divider />
            <Row gutter={16} align="middle">
                <Col xs={24}>
                    <Pool name="PUISSANCE" onMaxPoolChange={(v) => handleOnPoolChange("mightPoolMaximum", v)} onEdgePoolChange={(v) => handleOnPoolChange("mightPoolEdge", v)} onCurrentPoolChange={(v) => handleOnPoolChange("mightPoolCurrent", v)} current={character.mightPoolCurrent} max={character.mightPoolMaximum} min={character.mightPoolMinimum} edge={character.mightPoolEdge} />
                </Col>
                <Col xs={24}  >
                    <Pool name="CÉLÉRITÉ" onMaxPoolChange={(v) => handleOnPoolChange("speedPoolMaximum", v)} onEdgePoolChange={(v) => handleOnPoolChange("speedPoolEdge", v)} onCurrentPoolChange={(v) => handleOnPoolChange("speedPoolCurrent", v)} current={character.speedPoolCurrent} max={character.speedPoolMaximum} min={character.speedPoolMinimum} edge={character.speedPoolEdge} />
                </Col>
                <Col xs={24}  >
                    <Pool name="INTELLECT" onMaxPoolChange={(v) => handleOnPoolChange("intellectPoolMaximum", v)} onEdgePoolChange={(v) => handleOnPoolChange("intellectPoolEdge", v)} onCurrentPoolChange={(v) => handleOnPoolChange("intellectPoolCurrent", v)} current={character.intellectPoolCurrent} max={character.intellectPoolMaximum} min={character.intellectPoolMinimum} edge={character.intellectPoolEdge} />
                </Col>
            </Row>
            <Tabs defaultActiveKey="1" centered type="editable-card" style={{ marginTop: 10 }} hideAdd items={[
                {
                    key: '1',
                    label: 'Compétences',
                    closable: false,
                    children: <SkillList skills={character.skills} onSkillAdd={handleOnSkillAdd} onSkillsUpdate={handleOnSkillsUpdate} />,
                    icon: <StarOutlined />
                },
                {
                    key: '2',
                    label: 'Aptitudes',
                    closable: false,
                    children: <AbilityList abilities={character.abilities} onAbilityAdd={handleOnAbilityAdd} onAbilitiesUpdate={handleOnAbilitiesUpdate} />,
                    icon: <DeploymentUnitOutlined />
                },
                {
                    key: '3',
                    label: 'Inventaire',
                    closable: false,
                    children: 'Content of Tab Pane 3',
                },
                {
                    key: '4',
                    label: 'Notes',
                    closable: false,
                    children: 'Content of Tab Pane 3',
                },
            ]}>
            </Tabs>

        </div >
    )
}

export default CharacterSheet;