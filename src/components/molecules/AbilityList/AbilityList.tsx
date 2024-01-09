import React from "react";
import IAbility from "../../../models/ability";
import { Button, Col, Row } from "antd";

const AbilityItem = React.lazy(() => import("../../atoms/AbilityItem/AbilityItem"))

interface IProps {
  abilities: IAbility[];
  onAbilityAdd: () => void;
  onAbilitiesUpdate: (abilities: IAbility[]) => void;
}

const AbilityList: React.FC<IProps> = ({
  abilities,
  onAbilityAdd,
  onAbilitiesUpdate,
}) => {
  const handleOnAbilityNameChange = (id: number, value: string) => {
    const abilityIndex = abilities.findIndex((s) => s.id === id);
    if (abilityIndex > -1) {
      abilities[abilityIndex].name = value;
    }
    onAbilitiesUpdate(abilities);
  };

  const handleOnAbilityDescriptionChange = (id: number, value: string) => {
    const abilityIndex = abilities.findIndex((s) => s.id === id);
    if (abilityIndex > -1) {
      abilities[abilityIndex].description = value;
    }
    onAbilitiesUpdate(abilities);
  };

  const handleOnAbilityDelete = (id: number) => {
    const list = abilities.filter((a) => a.id !== id);
    onAbilitiesUpdate(list);
  };

  return (
    <div className="AbilityList">
      <Button
        type="primary"
        onClick={onAbilityAdd}
        style={{ marginBottom: 16 }}
      >
        Ajouter aptitude
      </Button>
      <Row gutter={16}>
        {abilities.map((ab) => (
          <Col xs={24} sm={12} lg={8}>
            <AbilityItem
              key={ab.id}
              ability={ab}
              onAbilityDelete={handleOnAbilityDelete}
              onAbilityNameChange={handleOnAbilityNameChange}
              onAbilityDescriptionChange={handleOnAbilityDescriptionChange}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AbilityList;
