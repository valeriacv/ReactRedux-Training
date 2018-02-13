import * as types from './actionTypes';
import AuthorApi from '../api/mockCourseApi';


export function loadAuthorSuccess(courses){
  return { type: types.LOAD_AUTHORS_SUCCESS, courses};
}

export function loadAuthors() {
  return function (dispatch) {
    return AuthorApi.getAllAuthor().then(authors => {
      dispatch(loadAuthorSuccess(authors));
    }).catch(error => {
      console.log('error');
      throw(error);
    });
  };
}
