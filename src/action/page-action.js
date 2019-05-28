import { createAction } from 'redux-actions';

export const FETCH_PAGE_LIST = 'FETCH_PAGE_LIST';
export const pageReducer = createAction(FETCH_PAGE_LIST);

export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const deleteListItem = createAction(DELETE_LIST_ITEM);

