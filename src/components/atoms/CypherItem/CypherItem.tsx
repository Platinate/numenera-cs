import { Button, Col, Input, InputNumber, Row } from "antd";
import React from "react";
import ICypher from "../../../models/cypher";
import { DeleteOutlined } from "@ant-design/icons";

import "./CypherItem.css";

interface IProps {
  cypher: ICypher;
  onCypherNameChange: (id: number, value: string) => void;
  onCypherLevelChange: (id: number, value: number) => void;
  onCypherDescriptionChange: (id: number, value: string) => void;
  onCypherDelete: (id: number) => void;
}

const CypherItem: React.FC<IProps> = ({
  cypher,
  onCypherDescriptionChange,
  onCypherNameChange,
  onCypherLevelChange,
  onCypherDelete,
}) => {
  return (
    <div className="CypherItem">
      <Row gutter={[16, 16]}>
        <Col xs={3} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => onCypherDelete(cypher.id)}
            danger
          />
        </Col>
        <Col xs={15}>
          <Input
            placeholder="Name"
            value={cypher.name}
            onChange={(e) => onCypherNameChange(cypher.id, e.target.value)}
          />
        </Col>
        <Col xs={6}>
          <InputNumber
            placeholder="Level"
            style={{ width: "100%" }}
            value={cypher.level}
            onChange={(v) => onCypherLevelChange(cypher.id, v!)}
          />
        </Col>
        <Col span={24}>
          <Input.TextArea
            placeholder="Description"
            value={cypher.description}
            onChange={(e) =>
              onCypherDescriptionChange(cypher.id, e.target.value)
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default CypherItem;
