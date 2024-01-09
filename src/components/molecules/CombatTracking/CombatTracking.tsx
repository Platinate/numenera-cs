import React from "react";
import ICharacter from "../../../models/character";
import { Row, Col, InputNumber, Checkbox } from "antd";
import WeaponList from "../WeaponList/WeaponList";
import IWeapon from "../../../models/weapon";

import "./CombatTracking.css";

interface IProps {
  character: ICharacter;
  handleOnWeaponAdd: () => void;
  handleOnWeaponsUpdate: (weapons: IWeapon[]) => void;
  onRestChange: (name:string, value:any) => void;
}

const CombatTracking: React.FC<IProps> = ({
  character,
  handleOnWeaponAdd,
  handleOnWeaponsUpdate,
  onRestChange
}) => {
  return (
    <div className="CombatTracking">
      <Row align={"middle"}>
        <Col xs={24} md={8} style={{display: "flex", justifyContent: "space-between"}}>
          <span>Repos : 1D6 + </span>
          <InputNumber name="recoveryBonus" value={character.recoveryBonus} onChange={(v) => onRestChange("recoveryBonus",v)} />
        </Col>
        <Col xs={6} md={4} style={{display: "flex", alignItems: "center"}}>
          <Checkbox name="recovery1ActionUsed" checked={character.recovery1ActionUsed} onChange={(evt) => onRestChange(evt.target.name!,evt.target.checked)}>1 action</Checkbox>
        </Col>
        <Col xs={6} md={4} style={{display: "flex", alignItems: "center"}}>
          <Checkbox name="recovery10MinsUsed" checked={character.recovery10MinsUsed} onChange={(evt) => onRestChange(evt.target.name!,evt.target.checked)}>10 mins</Checkbox>
        </Col>
        <Col xs={6} md={4} style={{display: "flex", alignItems: "center"}}>
          <Checkbox name="recovery1HourUsed" checked={character.recovery1HourUsed} onChange={(evt) => onRestChange(evt.target.name!,evt.target.checked)}>1 hr</Checkbox>
        </Col>
        <Col xs={6} md={4} style={{display: "flex", alignItems: "center"}}>
          <Checkbox name="recovery10HoursUsed" checked={character.recovery10HoursUsed} onChange={(evt) => onRestChange(evt.target.name!,evt.target.checked)}>10 hrs</Checkbox>
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
