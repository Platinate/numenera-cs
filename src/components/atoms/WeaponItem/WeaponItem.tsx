import React from "react";
import IWeapon from "../../../models/weapon";
import { Row, Col, Input, InputNumber, Select, Button } from "antd";
import { WEAPON_CATEGORY } from "../../../constants/types";
import { DeleteOutlined } from "@ant-design/icons";

import "./WeaponItem.css";

interface IProps {
    weapon: IWeapon;
    onWeaponDelete: (id: number) => void;
    onWeaponNameChange: (id: number, name: string) => void;
    onWeaponCategoryChange: (id: number, category: WEAPON_CATEGORY) => void;
    onWeaponDamageChange: (id: number, damage: number) => void;
    onWeaponModifierChange: (id: number, mod: number) => void;
}

const WeaponItem: React.FC<IProps> = ({ weapon, onWeaponCategoryChange, onWeaponNameChange, onWeaponDamageChange, onWeaponDelete, onWeaponModifierChange }) => {
    return (<div className="WeaponItem">
        <Row gutter={16} style={{marginTop: 16}}>
            <Col xs={4} style={{ display: "flex", justifyContent: "center" }}>
                <Button icon={<DeleteOutlined />} onClick={() => onWeaponDelete(weapon.id)} danger />
            </Col>
            <Col xs={20}>
                <Input placeholder="Nom" value={weapon.name} name="name" onChange={(e) => onWeaponNameChange(weapon.id, e.target.value)} />
            </Col>
            <Col xs={12}>
                <p>Catégorie :</p>
                <Select
                    defaultValue={weapon.category}
                    style={{ width: "100%" }}
                    onChange={(v) => onWeaponCategoryChange(weapon.id, v as WEAPON_CATEGORY)}
                    options={[
                        { value: 'L', label: 'Léger' },
                        { value: 'M', label: 'Moyen' },
                        { value: 'H', label: 'Lourd' }
                    ]}
                />
            </Col>
            <Col xs={6}>
                <p>Mod :</p>
                <InputNumber style={{width: "100%"}} value={weapon.modifier} name="damage" onChange={(v) => onWeaponModifierChange(weapon.id, v!)} />
            </Col>
            <Col xs={6}>
                <p>Dégats :</p>
                <InputNumber style={{width: "100%"}} defaultValue={0} value={weapon.damage} name="damage" onChange={(v) => onWeaponDamageChange(weapon.id, v!)} />
            </Col>
        </Row>
    </div>)
}

export default WeaponItem;