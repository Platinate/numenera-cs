import React from "react";

import "./Pool.css";
import { InputNumber } from "antd";
import Counter from "../../atoms/Counter/Counter";

interface IProps {
  name: string;
  max: number;
  current: number;
  min: number;
  edge: number;
  onCurrentPoolChange: (value: number | null) => void;
  onMaxPoolChange: (value: number | null) => void;
  onEdgePoolChange: (value: number | null) => void;
}

const InputNumberStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
};

const Pool: React.FC<IProps> = ({
  name,
  max,
  current,
  min,
  edge,
  onCurrentPoolChange,
  onEdgePoolChange,
  onMaxPoolChange,
}) => {
  return (
    <div className="Pool">
      <h2 className="pool__title">{name}</h2>
      <div className="pool__current">
        <Counter
          initialValue={current}
          max={max}
          min={min}
          onChange={(v) => onCurrentPoolChange(v)}
        />
      </div>
      <div className="pool__edge">
        <div className="pool_counter">
          <Counter
            initialValue={edge}
            min={0}
            onChange={(v) => onEdgePoolChange(v)}
          />
        </div>
        <h4>AVANTAGE</h4>
      </div>
      <div className="pool__max">
        <div className="pool_counter">
          <Counter
            initialValue={max}
            min={0}
            onChange={(v) => onMaxPoolChange(v)}
          />
        </div>
        <h4>MAX</h4>
      </div>
    </div>
  );
};

export default Pool;
