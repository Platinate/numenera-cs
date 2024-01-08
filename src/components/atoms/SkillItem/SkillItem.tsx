import React from "react";
import ISkill from "../../../models/skill";

import "./SkillItem.css";
import { Button, Col, Input, Radio, Row, Select } from "antd";
import { SKILL_LEVEL } from "../../../constants/types";
import { DeleteOutlined } from "@ant-design/icons";

const options = [
    { label: 'Entrainé', value: 'E' },
    { label: 'Spécialisé', value: 'S' },
    { label: 'Inapte', value: 'I' },
];

interface IProps {
    skill: ISkill;
    onSkillNameChange: (id: number, value: string) => void;
    onSkillTrainingChange: (id: number, value: SKILL_LEVEL) => void;
    onSkillDelete: (id: number) => void;
}

const SkillItem: React.FC<IProps> = ({ skill, onSkillNameChange, onSkillTrainingChange, onSkillDelete }) => {
    return (
        <div className="SkillItem">
            <Row gutter={16}>
                <Col xs={3}>
                    <Button icon={<DeleteOutlined />} onClick={() => onSkillDelete(skill.id)} danger />
                </Col>
                <Col xs={12}>

                    <Input value={skill.name} onChange={(e) => onSkillNameChange(skill.id, e.target.value)} />
                </Col>
                <Col xs={9}>
                    <Select
                        defaultValue={skill.skillLevel}
                        style={{ width: 120 }}
                        onChange={(v) => onSkillTrainingChange(skill.id, v as SKILL_LEVEL)}
                        options={[
                            { value: 'E', label: 'Entrainé' },
                            { value: 'S', label: 'Spécialisé' },
                            { value: 'I', label: 'Inapte' }
                        ]}
                    />
                </Col>
            </Row>


        </div>
    )
}

export default SkillItem;