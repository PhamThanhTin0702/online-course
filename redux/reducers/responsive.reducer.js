import {actions} from "@redux/actions/responsive.actions"

const initState = {
    screen: {
        desktop: true,
        mobile: false,
        tablet: false,
    },
}

const responsiveReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.RESPONSIVE_SET_DESKTOP_SCREEN:
          return { ...state, screen: {desktop: true, mobile: false, tablet: false}};
        case actions.RESPONSIVE_SET_MOBILE_SCREEN:
          return { ...state, screen: {desktop: false, mobile: true, tablet: false}};
        case actions.RESPONSIVE_SET_TABLET_SCREEN:
          return { ...state, screen: {desktop: false, mobile: false, tablet: true}};
        default:
          return { ...state };
    }
}

export default responsiveReducer