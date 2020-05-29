import { ADD_TODO, COMPLETE_TODO } from '../actions/types'

const initialState = [];

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_TODO:
            return [...state, payload];
        case COMPLETE_TODO:
            
            // return state.filter(todo => console.log(todo.id));
            return state.filter(todo => todo.id !== payload.id)
        default: 
            return state
    }
}