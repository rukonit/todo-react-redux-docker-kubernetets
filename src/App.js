import logo from './logo.svg';
import './App.css';
import AddTodo from './components/todos/AddTodo';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <AddTodo />
     </Provider>
    </div>
  );
}

export default App;
