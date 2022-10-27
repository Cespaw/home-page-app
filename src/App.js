import './App.css';
import Quote from './Quote';
import TodoList from './TodoList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Quote />
      </header>
      <div className='ToDoList'>
          <TodoList />
        </div>
    </div>
  );
}

export default App;
