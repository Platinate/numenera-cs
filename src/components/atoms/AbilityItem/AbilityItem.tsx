import { Button, Col, Input, Row } from "antd";
import React from "react";
import IAbility from "../../../models/ability";
import { DeleteOutlined } from "@ant-design/icons";

import "./AbilityItem.css"

interface IProps {
    ability: IAbility;
    onAbilityNameChange: (id: number, value: string) => void;
    onAbilityDescriptionChange: (id: number, value: string) => void;
    onAbilityDelete: (id: number) => void;
}

const AbilityItem: React.FC<IProps> = ({ ability, onAbilityDescriptionChange, onAbilityNameChange, onAbilityDelete }) => {
    return (<div className="AbilityItem">
        <Row gutter={16}>
            <Col xs={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button icon={<DeleteOutlined />} onClick={() => onAbilityDelete(ability.id)} danger />
            </Col>
            <Col xs={21} style={{ marginBottom: 10 }}>
                <Input placeholder="Name" value={ability.name} onChange={(e) => onAbilityNameChange(ability.id, e.target.value)} />
            </Col>
            <Col span={24}>
                <Input.TextArea placeholder="Description" value={ability.description} onChange={(e) => onAbilityDescriptionChange(ability.id, e.target.value)} /></Col>
        </Row>
    </div>)
}

export default AbilityItem;