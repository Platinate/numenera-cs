import React from "react";

import "./ProgressionTracking.css";
import { Col, InputNumber, Row } from "antd";

interface IProps {
    abilityProgression:number;
    poolProgression:number;
    effortProgression:number;
    skillProgression:number;
    onValueChange: (name:string,value:number) => void;
}

const ProgressionTracking : React.FC<IProps> = () => {
    return (
        <div className="ProgressionTracking">
            <h3 style={{textAlign:"center"}}>Dépenser 4XP pour augmenter d'un cran (max: RANG + 1)</h3>
            <Row align={"middle"} gutter={[16,16]}>
                <Col xs={12} md={6}>
                    <InputNumber name="abilityProgression" onChange={(v) => console.log(v)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Augmenter aptitude</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="poolProgression" onChange={(v) => console.log(v)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Tendre vers la perfection</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="effortProgression" onChange={(v) => console.log(v)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Effort +1</h4>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <InputNumber name="skillProgression" onChange={(v) => console.log(v)} min={0} defaultValue={0} style={{width: '90%', margin: '0 auto', display: 'block'}}/>
                    <div>
                        <h4>Compétence +</h4>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProgressionTracking;