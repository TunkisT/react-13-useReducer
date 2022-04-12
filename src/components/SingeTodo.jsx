import React from 'react';
import css from './SingeTodo.module.css';

function SingeTodo(props) {
  return (
    <li style={{ textDecoration: props.status ? 'line-through' : 'none' }}>
      <span>{props.title}</span>
      <button onClick={() => props.onCheck(props.id)} className={css.btn}>
        Check
      </button>
      <button>Delete me</button>
    </li>
  );
}

export default SingeTodo;
