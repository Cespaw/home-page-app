import Quote from "./Quote"
import TodoList from "./TodoList"

function Home() {
  return (
    <div>
      <header className="App-header">
        <Quote />
      </header>
      <div className='ToDoList'>
        <TodoList />
      </div>
    </div>
  );
}

export default Home;