import { actions } from "@redux/actions/layout.actions";

const initState = {
  navigation: {
      active: false
  },
  top_navigation: {
    active: false
  },
  bottom_navigation: {
    active: false
  },
};

const layoutReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LAYOUT_ENABLE_NAVIGATION:
      return { ...state, navigation: {active: true} };
    case actions.LAYOUT_DISABLE_NAVIGATION:
      return { ...state, navigation: {active: false} };
    case actions.LAYOUT_ENABLE_NAVIGATION_TOP:
      return { ...state, top_navigation: {active: true} };
    case actions.LAYOUT_DISABLE_NAVIGATION_TOP:
      return { ...state, top_navigation: {active: false} };
    case actions.LAYOUT_ENABLE_NAVIGATION_BOTTOM:
      return { ...state, bottom_navigation: {active: true} };
    case actions.LAYOUT_DISABLE_NAVIGATION_BOTTOM:
      return { ...state, bottom_navigation: {active: false} };
    default:
      return { ...state };
  }
};

export default layoutReducer;
