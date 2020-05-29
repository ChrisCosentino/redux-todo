import React from 'react';

import { connect } from 'react-redux';
import { completeTodo } from '../actions/todo';

const Todo = ({ todo, completeTodo }) => {

    const handleComplete = e => {
        e.preventDefault();
        completeTodo(todo.id);

    }

    return (
        <li 
            onClick={e => handleComplete(e)}
        >
            {todo.text}
        </li>
    )
}

export default connect(
    null,
    { completeTodo }
)(Todo);