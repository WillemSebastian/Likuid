import { SEARCH_UNIVERSITY } from "../../helpers/actionTypes";

export function searchUniversity(value) {
  return async dispatch => {
    try {
      const url = "http://universities.hipolabs.com/search?name=" + value;
      let header = new Headers({
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json"
      });
      const response = await fetch(url, {
        method: "GET",
        header: header
      });
      const data = await response.json();
      dispatch({
        type: SEARCH_UNIVERSITY,
        payload: {
          data: data
        }
      });
    } catch (error) {}
  };
}
