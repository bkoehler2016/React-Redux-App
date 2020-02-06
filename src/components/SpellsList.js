import React from "react";
import { connect } from "react-redux";
import { Card, CardBody } from "reactstrap";

const SpellsList = props => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.spells.map(spell => (
          <Card>
            <CardBody>{spell.spell}</CardBody>
          </Card>
        ))
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    spells: state.spells,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(SpellsList);
