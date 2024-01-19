import React from "react";
import ICharacter from "../../../models/character";
import { Row, Col, Select } from "antd";
import WeaponList from "../WeaponList/WeaponList";
import IWeapon from "../../../models/weapon";

import "./CombatTracking.css";
import Counter from "../../atoms/Counter/Counter";

interface IProps {
  character: ICharacter;
  handleOnWeaponAdd: () => void;
  handleOnWeaponsUpdate: (weapons: IWeapon[]) => void;
  onRestChange: (name: string, value: any) => void;
}

const RECOVERY_OPTIONS: { label: string; value: string }[] = [
  { label: "Aucun repos", value: "0" },
  { label: "1 action", value: "1" },
  { label: "10 mins", value: "2" },
  { label: "1 heure", value: "3" },
  { label: "10 heures", value: "4" },
];

const STATUS_OPTIONS: { label: string; value: string }[] = [
  { label: "Pleine forme", value: "0" },
  { label: "Affaibli", value: "1" },
  { label: "Neutralisé", value: "2" },
];

const CombatTracking: React.FC<IProps> = ({
  character,
  handleOnWeaponAdd,
  handleOnWeaponsUpdate,
  onRestChange,
}) => {
  return (
    <div className="CombatTracking">
      <Row align={"middle"} gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <h4 style={{ margin: 0, textAlign: "center" }}>ARMURE</h4>
          <Counter
            initialValue={character.armor}
            min={0}
            onChange={(v) => onRestChange("armor", v)}
          />
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[16,16]} align="middle">
            <Col xs={24}>
              <h4 style={{ margin: 0, textAlign: "center" }}>REPOS</h4>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  textAlign: "center",
                  border: "2px solid lightgray",
                  borderRadius: "5px",
                  padding: 4,
                  fontWeight: "bold",
                  width: "100%"
                }}
              >
                1D6 +
              </div>
            </Col>
            <Col xs={12}>
              <Counter
                initialValue={character.recoveryBonus}
                min={0}
                onChange={(v) => onRestChange("recoveryBonus", v)}
              />
            </Col>
            <Col xs={24}>
              <Select
                defaultValue="0"
                style={{ width: "100%" }}
                options={RECOVERY_OPTIONS}
                onChange={(v) => onRestChange("recovery", v)}
                value={character.recovery}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={4}>
          <h4 style={{ margin: 0, textAlign: "center" }}>DEGATS</h4>
          <Select
            defaultValue="0"
            style={{ width: "100%" }}
            options={STATUS_OPTIONS}
            onChange={(v) => onRestChange("status", v)}
            value={character.status}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col xs={24}>
          <WeaponList
            weapons={character.weapons}
            onWeaponAdd={handleOnWeaponAdd}
            onWeaponsUpdate={handleOnWeaponsUpdate}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CombatTracking;
