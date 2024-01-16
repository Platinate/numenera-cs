import React from "react";

import "./ArtifactList.css";
import IArtifact from "../../../models/artifact";
import { Button, InputNumber, Row, Col } from "antd";

interface IProps {
    artifacts: IArtifact[];
    onArtifactAdd: () => void;
    onArtifactsUpdate: (artifacts: IArtifact[]) => void;
  }
  
  const ArtifactItem = React.lazy(
    () => import("../../atoms/ArtifactItem/ArtifactItem")
  );

const ArtifactList : React.FC<IProps> = ({artifacts,onArtifactAdd,onArtifactsUpdate}) => {
    const handleOnArtifactNameChange = (id: number, value: string) => {
        const artifactIndex = artifacts.findIndex((s) => s.id === id);
        if (artifactIndex > -1) {
          artifacts[artifactIndex].name = value;
        }
        onArtifactsUpdate(artifacts);
      };
      const handleOnArtifactDischargeChange = (id: number, value: string) => {
        const artifactIndex = artifacts.findIndex((s) => s.id === id);
        if (artifactIndex > -1) {
          artifacts[artifactIndex].discharge = value;
        }
        onArtifactsUpdate(artifacts);
      };
    
      const handleOnArtifactDescriptionChange = (id: number, value: string) => {
        const artifactIndex = artifacts.findIndex((s) => s.id === id);
        if (artifactIndex > -1) {
          artifacts[artifactIndex].description = value;
        }
        onArtifactsUpdate(artifacts);
      };
    
      const handleOnArtifactDelete = (id: number) => {
        const list = artifacts.filter((a) => a.id !== id);
        onArtifactsUpdate(list);
      };
    
      return (
        <div className="ArtifactList">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Button
                type="primary"
                onClick={onArtifactAdd}
                style={{ marginBottom: 16 }}
              >
                Ajouter artefact
              </Button>
            </div>
          </div>
          <Row gutter={16}>
            {artifacts.map((c) => (
              <Col xs={24} md={12}>
                <ArtifactItem
                  key={c.id}
                  artifact={c}
                  onArtifactDelete={handleOnArtifactDelete}
                  onArtifactNameChange={handleOnArtifactNameChange}
                  onArtifactDischargeChange={handleOnArtifactDischargeChange}
                  onArtifactDescriptionChange={handleOnArtifactDescriptionChange}
                />
              </Col>
            ))}
          </Row>
        </div>
      );
};

export default ArtifactList;
