import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => dispatch => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  dispatch({ type: FETCH_COMMENTS, payload: response });
};
