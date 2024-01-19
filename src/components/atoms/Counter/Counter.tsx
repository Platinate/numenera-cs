import { Button, Input } from "antd";
import React from "react";

import "./Counter.css";

interface IProps {
  onChange?: (value: number) => void;
  max?:number;
  min?:number;
  initialValue?: number;
}

const Counter: React.FC<IProps> = ({ onChange, initialValue, min, max }) => {
  const [state, setState] = React.useState<number | undefined>(0);

  React.useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const handleOnPlusButtonClick = () => {
    let actualValue;
    if(state) actualValue = state
    else actualValue = 0;
    const newValue = actualValue +1;
    if(max && newValue > max) return;
    setState(newValue);
    if (onChange) onChange(newValue);
  };
  const handleOnMinusButtonClick = () => {
    let actualValue;
    if(state) actualValue = state
    else actualValue = 0;
    const newValue = actualValue -1;
    if(min && newValue < min) return;
    setState(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div className="Counter">
      <Button className="counter__button counter__button--minus" type="primary" onClick={handleOnMinusButtonClick}>-</Button>
      <Input readOnly value={state} defaultValue={0}/>
      <Button className="counter__button counter__button--plus" type="primary" onClick={handleOnPlusButtonClick}>+</Button>
    </div>
  );
};

export default Counter;
