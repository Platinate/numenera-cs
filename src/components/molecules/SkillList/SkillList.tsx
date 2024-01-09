import React from "react";
import ISkill from "../../../models/skill";

import "./SkillList.css";
import { Button, Col, Row } from "antd";
import { SKILL_LEVEL } from "../../../constants/types";

const SkillItem = React.lazy(() => import("../../atoms/SkillItem/SkillItem"))

interface IProps {
  skills: ISkill[];
  onSkillAdd: () => void;
  onSkillsUpdate: (skills: ISkill[]) => void;
}

const SkillList: React.FC<IProps> = ({
  skills,
  onSkillAdd,
  onSkillsUpdate,
}) => {
  const handleOnSkillNameChange = (id: number, value: string) => {
    const skillIndex = skills.findIndex((s) => s.id === id);
    if (skillIndex > -1) {
      skills[skillIndex].name = value;
    }
    onSkillsUpdate(skills);
  };

  const handleOnSkillTrainingChange = (id: number, value: SKILL_LEVEL) => {
    const skillIndex = skills.findIndex((s) => s.id === id);
    if (skillIndex > -1) {
      skills[skillIndex].skillLevel = value;
    }
    onSkillsUpdate(skills);
  };

  const handleOnSkillDelete = (id: number) => {
    const newList = skills.filter((s) => s.id !== id);
    onSkillsUpdate(newList);
  };

  return (
    <div className="SkillList">
      <Button type="primary" onClick={onSkillAdd} style={{ marginBottom: 16 }}>
        Ajouter compétence
      </Button>
      <Row gutter={16}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} lg={8}>
            <SkillItem
              key={skill.id}
              skill={skill}
              onSkillDelete={handleOnSkillDelete}
              onSkillNameChange={handleOnSkillNameChange}
              onSkillTrainingChange={handleOnSkillTrainingChange}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkillList;
