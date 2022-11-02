import { useEffect, useState } from "react";

function Quote() {

  const quoteURL = 'https://stoic-quotes.com/api/quote'
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  console.log(date)

  useEffect(() => {
    setLoading(true)
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
        setLoading(false)
      })
  }

  return (
    <div id='quote-box'>
      {loading ? <p>Loading...</p>
        :
        <div>
          <p>
            {quote.content}
          </p>
          <p>
            {quote.name}
          </p>
        </div>
      }
    </div>
  );
}

export default Quote;