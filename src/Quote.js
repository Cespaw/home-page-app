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
    <>
      {loading ? <p>Loading...</p>
        :
        <div class="card" style={{width: 700}}>
          <div class="card-header">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{quote.content}</p>
                <footer class="blockquote-footer">{quote.name}<cite title="Source Title"></cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      }
    </>

  );
}

export default Quote;