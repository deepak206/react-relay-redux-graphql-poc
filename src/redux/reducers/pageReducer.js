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
          let removekey = '';
          state.pageList.filter((value, key)=> {
            if(value.id == payload) {
              removekey = key;
            }
          });

          let list = [...state.pageList];
          list.splice(removekey,1);

         return {
           ...state,
           pageList: list
         }
         
        default:
            return state;

        }
  };

  export default pageReducer;