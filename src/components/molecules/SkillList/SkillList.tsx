import React from "react";
import ISkill from "../../../models/skill";

import "./SkillList.css";
import { Button } from "antd";
import SkillItem from "../../atoms/SkillItem/SkillItem";
import { SKILL_LEVEL } from "../../../constants/types";

interface IProps {
    skills: ISkill[];
    onSkillAdd: () => void;
    onSkillsUpdate: (skills:ISkill[]) => void;
}

const SkillList: React.FC<IProps> = ({skills, onSkillAdd, onSkillsUpdate}) => {

    const handleOnSkillNameChange = (id:number,value:string) => {
        const skillIndex = skills.findIndex(s => s.id === id);
        if(skillIndex > -1) {
            skills[skillIndex].name = value;
        }
        onSkillsUpdate(skills);
    }

    const handleOnSkillTrainingChange = (id:number, value:SKILL_LEVEL) => {
        const skillIndex = skills.findIndex(s => s.id === id);
        if(skillIndex > -1) {
            skills[skillIndex].skillLevel = value;
        }
        onSkillsUpdate(skills);
    }

    const handleOnSkillDelete = (id:number) => {
        const newList = skills.filter(s => s.id !== id);
        onSkillsUpdate(newList);
    }


    return (
        <div className="SkillList">
            <Button type="primary" onClick={onSkillAdd} style={{marginBottom: 10}}>Ajouter compétence</Button>
            {skills.map(skill => <SkillItem key={skill.id} skill={skill} onSkillDelete={handleOnSkillDelete} onSkillNameChange={handleOnSkillNameChange} onSkillTrainingChange={handleOnSkillTrainingChange}/>)}
        </div>
    );
}

export default SkillList;