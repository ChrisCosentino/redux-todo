import { ADD_TODO, COMPLETE_TODO } from './types';
import uuid from 'react-uuid';

export const addTodo = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO,
        payload: {
            id: uuid(),
            text: todo
        }
    });
};

export const completeTodo = (id) => dispatch => {
    dispatch({
        type: COMPLETE_TODO,
        payload: {
            id
        }
    });
};