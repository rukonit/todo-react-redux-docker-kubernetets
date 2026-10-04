import { configureStore } from '@reduxjs/toolkit';

import reducer from '../features/todos/todoSlice';

export const store = configureStore({
    reducer: {
        todos: reducer,
    },
});