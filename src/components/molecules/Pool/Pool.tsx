import React from "react";

import "./Pool.css";
import { InputNumber } from "antd";

interface IProps {
    name: string;
    max: number;
    current: number;
    min: number;
    edge: number;
    onCurrentPoolChange: (value:number | null) => void;
    onMaxPoolChange: (value:number | null) => void;
    onEdgePoolChange: (value:number |null) => void;
}

const InputNumberStyle: React.CSSProperties = {
    height: '100%',
    width: '100%'
}

const Pool: React.FC<IProps> = ({ name, max, current, min, edge, onCurrentPoolChange, onEdgePoolChange, onMaxPoolChange }) => {
    return (
        <div className="Pool">
            <h2 className="pool__title">{name}</h2>
            <div className="pool__current">
                <InputNumber style={InputNumberStyle} onChange={(v) => onCurrentPoolChange(v)} value={current} max={max} min={min} />
            </div>
            <div className="pool__edge">
                <h4>AVANTAGE</h4>
                <div className="pool_counter">
                    <InputNumber style={InputNumberStyle} onChange={(v) => onEdgePoolChange(v)} value={edge} min={0} />
                </div>
            </div>
            <div className="pool__max">
                <h4>MAX</h4><div className="pool_counter">
                    <InputNumber style={InputNumberStyle} onChange={(v) => onMaxPoolChange(v)} value={max} min={0} />
                </div>
            </div>
        </div>
    )
}

export default Pool;