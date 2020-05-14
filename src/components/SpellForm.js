import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { getData } from "../actions";

const SpellForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div className="fetch">**we are fetching</div>
      ) : (
        <Button color="danger" onClick={handleGetData}>
          Get Spells
        </Button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(SpellForm);
