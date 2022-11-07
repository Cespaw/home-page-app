import './App.css';
import Quote from './Quote';
import TodoList from './TodoList';
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <>

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/home">Home</a>
            </div>
            <ul class="nav navbar-nav">
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </nav>

        <div>
          <Routes>

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

          </Routes>
        </div>

      </>
    </BrowserRouter>
  );
}

export default App;
