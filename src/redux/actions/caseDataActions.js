import * as constant from "../constant";

export const getCaseListData = () => {
  return (dispatch) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json")
      .then(r => r.text())
      .then(data => {
        const apiResult = JSON.parse(data);
        // console.log("apiResult",apiResult);
        dispatch({
          type: constant.CASE_LIST_SUCCESS,
          payload: apiResult
        });
      })
      .catch()

  }
}