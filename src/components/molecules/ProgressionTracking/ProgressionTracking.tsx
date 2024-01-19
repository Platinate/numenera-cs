import React from "react";

import "./ProgressionTracking.css";
import { Col, InputNumber, Row } from "antd";
import Counter from "../../atoms/Counter/Counter";

interface IProps {
  abilityProgression: number;
  poolProgression: number;
  effortProgression: number;
  skillProgression: number;
  otherProgression: number;
  onValueChange: (name: string, value: number) => void;
}

const ProgressionTracking: React.FC<IProps> = ({
  abilityProgression,
  poolProgression,
  effortProgression,
  skillProgression,
  otherProgression,
  onValueChange,
}) => {
  return (
    <div className="ProgressionTracking">
      <h3 style={{ textAlign: "center" }}>
        Dépenser 4XP pour augmenter d'un cran (max: RANG)
      </h3>
      <Row align={"middle"} gutter={[16, 16]}>
        <Col xs={12} md={6}>
          <Counter
            initialValue={abilityProgression}
            min={0}
            onChange={(v) => onValueChange("abilityProgression", v)}
          />
          <div>
            <h4>Statistiques +4</h4>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Counter
            initialValue={poolProgression}
            min={0}
            onChange={(v) => onValueChange("poolProgression", v)}
          />
          <div>
            <h4>Avantage +1</h4>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Counter
            initialValue={effortProgression}
            min={0}
            onChange={(v) => onValueChange("effortProgression", v)}
          />
          <div>
            <h4>Effort +1</h4>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Counter
            initialValue={skillProgression}
            min={0}
            onChange={(v) => onValueChange("skillProgression", v)}
          />
          <div>
            <h4>Compétence +</h4>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Counter
            initialValue={otherProgression}
            min={0}
            onChange={(v) => onValueChange("otherProgression", v)}
          />
          <div>
            <h4>Autre</h4>
            <p>Repos +2 / Nouveau pouvoir</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProgressionTracking;
