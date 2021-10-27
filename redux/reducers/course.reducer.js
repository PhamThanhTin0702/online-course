import { actions } from "../actions/course.actions";

const initState = {
    course: null,
    watchingLesson: null,
    watchingChapter: null,
};

const courseReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.COURSE_SET_COURSE:
        return { ...state, course: {...action.value} };
    case actions.COURSE_SET_WATCHING_CHAPTER:
      return { ...state, watchingChapter: {...state.course.chapters[action.value.parentID]}, watchingLesson: {...state.course.chapters[action.value.parentID].lessons[action.value.lessonID]}};
    case actions.COURSE_SET_WATCHING_LESSON:
      return { ...state, watchingLesson: {...state.watchingChapter.lessons[action.value.lessonID]}};
    default:
      return { ...state };
  }
};

export default courseReducer;
