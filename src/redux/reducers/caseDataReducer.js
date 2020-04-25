import * as constant from "../constant";
const initialState = {
  isLoad: false,
  caseData: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.CASE_LIST_SUCCESS:
      return {
        ...state,
        isLoad: true,
        caseData: action.payload
      }
    default:
      return state;
  }
}
