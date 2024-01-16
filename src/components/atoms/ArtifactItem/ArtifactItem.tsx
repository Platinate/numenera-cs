import { Button, Col, Input, Row } from "antd";
import React from "react";
import IArtifact from "../../../models/artifact";
import { DeleteOutlined } from "@ant-design/icons";

import "./ArtifactItem.css";

interface IProps {
  artifact: IArtifact;
  onArtifactNameChange: (id: number, value: string) => void;
  onArtifactDischargeChange: (id: number, value: string) => void;
  onArtifactDescriptionChange: (id: number, value: string) => void;
  onArtifactDelete: (id: number) => void;
}

const ArtifactItem: React.FC<IProps> = ({
    artifact,
  onArtifactDescriptionChange,
  onArtifactNameChange,
  onArtifactDischargeChange,
  onArtifactDelete,
}) => {
  return (
    <div className="ArtifactItem">
      <Row gutter={[16, 16]}>
        <Col xs={3} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => onArtifactDelete(artifact.id)}
            danger
          />
        </Col>
        <Col xs={15}>
          <Input
            placeholder="Name"
            value={artifact.name}
            onChange={(e) => onArtifactNameChange(artifact.id, e.target.value)}
          />
        </Col>
        <Col xs={6}>
          <Input
            placeholder="Décharge"
            style={{ width: "100%" }}
            value={artifact.discharge}
            onChange={(e) => onArtifactDischargeChange(artifact.id, e.target.value)}
          />
        </Col>
        <Col span={24}>
          <Input.TextArea
            placeholder="Description"
            value={artifact.description}
            onChange={(e) =>
              onArtifactDescriptionChange(artifact.id, e.target.value)
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default ArtifactItem;
