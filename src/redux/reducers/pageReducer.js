import { FETCH_PAGE_LIST } from '../../action/page-action';

const initialState = {
    pageList: [],
};

const pageReducer = (state = initialState, {
    type, payload,
  }) => {
    switch (type) {
        case FETCH_PAGE_LIST:
          return {
            ...state,
            pageList: payload,
          };

        default:
            return state;

        }
  };

  export default pageReducer;