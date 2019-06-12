import { FETCH_PAGE_LIST, DELETE_LIST_ITEM } from '../../action/page-action';

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

      case DELETE_LIST_ITEM:
        const index = state.pageList.findIndex(function(o){
          return o.id === payload;
        });

        let list = [...state.pageList];
        list.splice(index,1);

        return {
          ...state,
          pageList: list
        }
        
      default:
        return state;
    }
  };

  export default pageReducer;
  