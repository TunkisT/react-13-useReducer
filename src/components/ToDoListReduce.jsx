import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SingeTodo from './SingeTodo';

const initTodos = [
  { id: 1, title: 'Go to park', doneStatus: true },
  { id: 2, title: 'Go to mol', doneStatus: false },
];

function ToDoListReduce() {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  const [todoTitle, setTodoTitle] = useState('');

  function checkHandler(todoId) {
    dispatch({ type: 'checkTodo', payload: todoId });
  }

  function deleteHandler(id) {
    dispatch({ type: 'removeTodo', payload: id });
  }

  function todoReducer(todos, action) {
    switch (action?.type) {
      case 'addTodo':
        return [...todos, action.payload];
      case 'checkTodo':
        const todoCopy = [...todos];
        const found = todoCopy.find((obj) => obj.id === action.payload);
        found.doneStatus = !found.doneStatus;
        return todoCopy;
      case 'removeTodo':
        const arrAfterDelete = todos.filter((obj) => obj.id !== action.payload);
        return arrAfterDelete;
      default:
        throw new Error('No action type found');
    }
  }

  function formHandler(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      doneStatus: false,
    };
    dispatch({ type: 'addTodo', payload: newTodo });
    setTodoTitle('');
  }

  return (
    <div>
      <h2>ToDo list</h2>
      <form onSubmit={formHandler}>
        <input
          onChange={(e) => setTodoTitle(e.target.value)}
          type='text'
          placeholder='Title'
          value={todoTitle}
        />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((obj) => (
          <SingeTodo
            onDelete={deleteHandler}
            onCheck={checkHandler}
            status={obj.doneStatus}
            id={obj.id}
            key={obj.id}
            title={obj.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoListReduce;
