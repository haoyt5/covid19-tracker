import * as constant from "../constant";
import data from "../../components/dashboard/data/temp.json";
// import _ from "lodash";

const attatchID = (object) => {
  object.forEach((item, i) => {
    item.id = i + 1;
  }) 
 return object;
}
export const convertTimeStamp = (object) => {
  object.forEach((item, i) => {
    item.data_as_of =  Date.parse(item["data_as_of"].replace(/\//g,"-"));
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
                          .replace(/宜蘭縣/g,"Yilan County")
                          .replace(/基隆市/g,"Keelung City")
                          .replace(/台北市/g,"Taipei City")
                          .replace(/新北市/g,"New Taipei City")
                          .replace(/桃園市/g,"Taoyuan City")
                          .replace(/新竹市/g,"Hsinchu City")
                          .replace(/新竹縣/g,"Hsinchu County")
                          .replace(/苗栗縣/g,"Miaoli County")
                          .replace(/台中市/g,"Taichung City")
                          .replace(/南投縣/g,"Nantou County")
                          .replace(/彰化縣/g,"Changhua County")
                          .replace(/雲林縣/g,"Yunlin County")
                          .replace(/嘉義市/g,"Chiayi City")
                          .replace(/嘉義縣/g,"Chiayi County")
                          .replace(/台南市/g,"Tainan City")
                          .replace(/高雄市/g,"Kaohsiung City")
                          .replace(/屏東縣/g,"Pingtung County")
                          .replace(/台東縣/g,"Taitung County")
                          .replace(/花蓮縣/g,"Hualien County")
                          .replace(/澎湖縣/g,"Penghu County")
                          .replace(/金門縣/g,"Kinmen County")
                          .replace(/連江縣/g,"Lienchiang County")

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
   
    // fetch("https://cors-anywhere.herokuapp.com/https://od.cdc.gov.tw/eic/Day_Confirmation_Age_County_Gender_19CoV.json")
    //   .then(r => r.text())
    //   .then(data => {
    //     const apiResult = JSON.parse(convertToEnglish(data));
    //     console.log("apiResult",apiResult);
    //     dispatch({
    //       type: constant.CASE_LIST_SUCCESS,
    //       payload: attatchID(apiResult)
    //     });
    //   })
    //   .catch()

  }
}