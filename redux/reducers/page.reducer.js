import { actions } from "../actions/page.actions";

const initState = {
  modal: false,
  currUser: null,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.PAGE_ACTION_MODAL_LOGIN:
      return { ...state, modal: true };
    case actions.PAGE_HIDE_MODAL_LOGIN:
      return { ...state, modal: false };
    case actions.PAGE_SET_CURR_USER:
      return { ...state, currUser: {...action.value}};
    default:
      return { ...state };
  }
};

export default pageReducer;
