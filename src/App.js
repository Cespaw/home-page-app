import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const quoteURL = 'https://stoic-quotes.com/api/quote'
  const [quote, setQuote] = useState({})

  useEffect(()=>{
    fetchQuote();
  }, [])

  const fetchQuote = () => {
    fetch(quoteURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuote({
          name: data.author,
          content: data.text
        })
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id='quote-box'>
          <p>
            {quote.content}
          </p>
          <p>
            {quote.name}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
