import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './components/AddTodo';

import store from './store';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
      **After adding a todo, click on it to remove it from the list
    </Provider>
  )
}

export default App;

