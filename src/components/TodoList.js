import React from 'react';

import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = ({ todos }) => {


    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(
    mapStateToProps
)(TodoList);
