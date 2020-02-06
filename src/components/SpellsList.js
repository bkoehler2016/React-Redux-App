import React from "react";
import { useSelector } from "react-redux";
import { Card, CardBody } from "reactstrap";

const SpellsList = props => {
  const name = useSelector(state => state.spells);
  const error = useSelector(state => state.error);
  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        name.map(spells => (
          <Card>
            <CardBody>{spells.name}</CardBody>
          </Card>
        ))
      )}
    </>
  );
};

export default SpellsList;
