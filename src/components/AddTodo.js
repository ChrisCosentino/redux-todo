import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';


const AddTodo = ({addTodo}) => {

    const [formData, setFormData] = useState({
        todo: ''
    });

    const { todo } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        e.target.reset();
        // login(email, password);
    }


    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" name="todo" onChange={e => onChange(e)} required />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

export default connect(
    mapStateToProps,
    { addTodo }
)(AddTodo);