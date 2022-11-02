import { useEffect, useState } from "react";

function Quote() {

    const quoteURL = 'https://stoic-quotes.com/api/quote'
    const [quote, setQuote] = useState({})

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    console.log(date)

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
        <div id='quote-box'>
          <p>
            {quote.content}
          </p>
          <p>
            {quote.name}
          </p>
        </div>
    );
}

export default Quote;