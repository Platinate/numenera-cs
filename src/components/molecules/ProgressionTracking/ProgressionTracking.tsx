import React from "react";

import "./ProgressionTracking.css";
import { Col, InputNumber, Row } from "antd";

interface IProps {
    abilityProgression:number;
    poolProgression:number;
    effortProgression:number;
    skillProgression:number;
    otherProgression:number;
    onValueChange: (name:string,value:number) => void;
}

const ProgressionTracking : React.FC<IProps> = ({abilityProgression,poolProgression,effortProgression,skillProgression,otherProgression,onValueChange}) => {
    return (
        <div className="ProgressionTracking">
            <h3 style={{textAlign:"center"}}>Dépenser 4XP pour augmenter d'un cran (max: RANG)</h3>
            <Row align={"middle"} gutter={[16,16]}>
                <Col xs={12} md={6}>
                    <InputNumber name="abilityProgression" value={abilityProgression} onChange={(v) => onValueChange("abilityProgression",v!)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Statistiques +4</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="poolProgression" value={poolProgression} onChange={(v) => onValueChange("poolProgression",v!)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Avantage +1</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="effortProgression" value={effortProgression} onChange={(v) => onValueChange("effortProgression",v!)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Effort +1</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="skillProgression" value={skillProgression} onChange={(v) => onValueChange("skillProgression",v!)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Compétence +</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="otherProgression" value={otherProgression} onChange={(v) => onValueChange("otherProgression",v!)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Autre</h4>
                        <p>Repos +2 / Nouveau pouvoir</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProgressionTracking;