import * as constant from "../constant";
const initialState = {
  caseList: {
    isLoad: false,
    result: []
  },
  metaData: {
    isLoad: false,
    result: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case constant.GET_CASE_LIST_SUCCESS:
      return {
        ...state,
        caseList: {
          isLoad: true,
          result: action.payload
        }
      }
    case constant.GET_CASE_META_DATA_SUCCESS:
      return {
        ...state,
        metaData: {
          isLoad: true,
          result: action.payload
        }
      }
    default:
      return state;
  }
}
