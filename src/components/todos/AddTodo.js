import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo } from '../../features/todos/todoSlice';

export default function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.todos);

    const handleAddTodo = () => {
        const trimmedText = text.trim();

        if (!trimmedText) {
            return;
        }

        dispatch(addTodo(trimmedText));
        setText('');
    };

    return (
        <div className="todo-panel">
            <h2 className="todo-title">Add Todo</h2>

            <div className="todo-form">
                <input
                    className="todo-input"
                    type="text"
                    value={text}
                    placeholder="What needs to be done?"
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTodo();
                        }
                    }}
                />
                <button type="button" className="todo-button" onClick={handleAddTodo}>
                    Add
                </button>
            </div>

            <div className="todo-section">
                <h3 className="todo-subtitle">Todo List</h3>

                {todos.length === 0 ? (
                    <p className="todo-empty">No tasks yet. Add one above.</p>
                ) : (
                    <ul className="todo-list">
                        {todos.map((todo, index) => (
                            <li key={index} className="todo-item">
                                {todo}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}