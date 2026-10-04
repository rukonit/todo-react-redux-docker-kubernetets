import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../../features/todos/todoSlice';
export default function AddTodo() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.todos);

    return (
        <div>

            <h2>Add Todo</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {dispatch(addTodo(text))}}>Add</button>
            <div>
                <h3>Todo List</h3>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}