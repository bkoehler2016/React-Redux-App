import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SPELLS = "UPDATE_SPELLS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://www.dnd5eapi.co/api/spells/")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SPELLS, payload: res.data.results });
    })
    .catch(err => {
      console.log("error fetching data from api. err: ", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};
