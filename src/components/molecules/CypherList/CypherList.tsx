import React from "react";
import ICypher from "../../../models/cypher";
import { Button, Col, InputNumber, Row } from "antd";

interface IProps {
  cypherLimit: number;
  cyphers: ICypher[];
  onCypherAdd: () => void;
  onCyphersUpdate: (cyphers: ICypher[]) => void;
  onValueChange: (name:string, value:any) => void;
}

const CypherItem = React.lazy(
  () => import("../../atoms/CypherItem/CypherItem")
);

const CypherList: React.FC<IProps> = ({
  cyphers,
  cypherLimit,
  onCypherAdd,
  onCyphersUpdate,
  onValueChange
}) => {
  const handleOnCypherNameChange = (id: number, value: string) => {
    const cypherIndex = cyphers.findIndex((s) => s.id === id);
    if (cypherIndex > -1) {
      cyphers[cypherIndex].name = value;
    }
    onCyphersUpdate(cyphers);
  };
  const handleOnCypherLevelChange = (id: number, value: number) => {
    const cypherIndex = cyphers.findIndex((s) => s.id === id);
    if (cypherIndex > -1) {
      cyphers[cypherIndex].level = value;
    }
    onCyphersUpdate(cyphers);
  };

  const handleOnCypherDescriptionChange = (id: number, value: string) => {
    const cypherIndex = cyphers.findIndex((s) => s.id === id);
    if (cypherIndex > -1) {
      cyphers[cypherIndex].description = value;
    }
    onCyphersUpdate(cyphers);
  };

  const handleOnCypherDelete = (id: number) => {
    const list = cyphers.filter((a) => a.id !== id);
    onCyphersUpdate(list);
  };

  return (
    <div className="CypherList">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            type="primary"
            onClick={onCypherAdd}
            style={{ marginBottom: 16 }}
          >
            Ajouter cypher
          </Button>
        </div>
        <div>
          <span>Limite : </span>
          <InputNumber name="cypherLimit" value={cypherLimit} onChange={(v) => onValueChange("cypherLimit",v!)} />
        </div>
      </div>
      <Row gutter={16}>
        {cyphers.map((c) => (
          <Col xs={24} md={12}>
            <CypherItem
              key={c.id}
              cypher={c}
              onCypherDelete={handleOnCypherDelete}
              onCypherNameChange={handleOnCypherNameChange}
              onCypherLevelChange={handleOnCypherLevelChange}
              onCypherDescriptionChange={handleOnCypherDescriptionChange}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CypherList;
