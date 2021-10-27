import {combineReducers} from 'redux';

import pageReducer from "@redux/reducers/page.reducer.js";
import courseReducer from "@redux/reducers/course.reducer.js";
import layoutReducer from "@redux/reducers/layout.reducer.js";
import responsiveReducer from "@redux/reducers/responsive.reducer.js";

const rootReducer = combineReducers({
    pageReducer: pageReducer,
    courseReducer: courseReducer,
    layoutReducer: layoutReducer,
    responsiveReducer: responsiveReducer,
});

export default rootReducer;