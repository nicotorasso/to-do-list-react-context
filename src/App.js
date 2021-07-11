import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { TodoProvider } from './context/TodoProvider';

function App() {
  return (
    <div className='container-fluid'>
      <div>
        <h3 className="h3" style={{textAlign: 'center', margin: '0.75rem'}}>TO-DO APP with Context API + useReducer </h3>
        <TodoProvider>
          <TodoInput/>
          <hr/>
          <TodoList/>
        </TodoProvider>
      </div>
    </div>
  );
}

export default App;
