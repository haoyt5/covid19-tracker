import * as constant from "../constant";
import data from "../../components/dashboard/data/temp.json";
// import _ from "lodash";

const attatchID = (object) => {
  object.forEach((item, i) => {
    item.id = i + 1;
  }) 
 return object;
}

const convertToEnglish = (string) =>{
  let result = [{}];
  const newstring = string.replace(/確定病名/g, "disease_name")
                          .replace(/確定病例數/g, "confirmed_case_count")
                          .replace(/個案研判日/g, "data_as_of")
                          .replace(/縣市/g, "county_city")
                          .replace(/性別/g, "gender")
                          .replace(/年齡層/g, "age_group")
                          .replace(/是否為境外移入/g, "imported")
                          .replace(/確定病例數/g, "confirmed_case_count")
                          .replace(/嚴重特殊傳染性肺炎/g,"SARS-CoV-2 Infection")
                          .replace(/女/g, "Female").replace(/男/g, "Male")
                          .replace(/是/g, "Y").replace(/否/g, "N")
             
  result = newstring     
  return result;
}
export const getCaseListData = () => {
  return (dispatch) => {

    const apiResult = JSON.parse(convertToEnglish(JSON.stringify(data)));
    dispatch({
          type: constant.CASE_LIST_SUCCESS,
          payload: attatchID(apiResult)
        });
   
    // fetch(
    //   "https://cors-anywhere.herokuapp.com/https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json")
    //   .then(r => r.text())
    //   .then(data => {
    //     const apiResult = JSON.parse(data);
    //     console.log("apiResult",apiResult);
    //     dispatch({
    //       type: constant.CASE_LIST_SUCCESS,
    //       payload: apiResult
    //     });
    //   })
    //   .catch()

  }
}