import React from "react";
import IWeapon from "../../../models/weapon";
import { Button, Col, Row } from "antd";
import { WEAPON_CATEGORY } from "../../../constants/types";

const WeaponItem = React.lazy(() => import("../../atoms/WeaponItem/WeaponItem"))

interface IProps {
    weapons: IWeapon[];
    onWeaponAdd: () => void;
    onWeaponsUpdate: (weapons: IWeapon[]) => void;
}

const WeaponList: React.FC<IProps> = ({ weapons, onWeaponAdd, onWeaponsUpdate }) => {

    const handleOnWeaponNameChange = (id: number, value: string) => {
        const abilityIndex = weapons.findIndex(s => s.id === id);
        if (abilityIndex > -1) {
            weapons[abilityIndex].name = value;
        }
        onWeaponsUpdate(weapons);
    }

    const handleOnWeaponDamageChange = (id: number, value: number) => {
        const abilityIndex = weapons.findIndex(s => s.id === id);
        if (abilityIndex > -1) {
            weapons[abilityIndex].damage = value;
        }
        onWeaponsUpdate(weapons);
    }

    const handleOnWeaponDelete = (id: number) => {
        const list = weapons.filter(a => a.id !== id);
        onWeaponsUpdate(list);
    }

    const handleOnWeaponCategoryChange = (id: number, category: WEAPON_CATEGORY) => {
        const abilityIndex = weapons.findIndex(s => s.id === id);
        if (abilityIndex > -1) {
            weapons[abilityIndex].category = category;
        }
        onWeaponsUpdate(weapons);
    }

    const handleOnWeaponModifierChange = (id: number, value: number) => {
        const abilityIndex = weapons.findIndex(s => s.id === id);
        if (abilityIndex > -1) {
            weapons[abilityIndex].modifier = value;
        }
        onWeaponsUpdate(weapons);
    }


    return (
        <div className="WeaponList">
            <Button type="primary" onClick={onWeaponAdd}>Ajouter une arme</Button>
            <Row gutter={16}>
                {weapons.map(weapon => (
                    <Col xs={24} sm={12}>
                        <WeaponItem key={weapon.id} weapon={weapon} onWeaponDelete={handleOnWeaponDelete} onWeaponNameChange={handleOnWeaponNameChange} onWeaponCategoryChange={handleOnWeaponCategoryChange} onWeaponDamageChange={handleOnWeaponDamageChange} onWeaponModifierChange={handleOnWeaponModifierChange} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default WeaponList;