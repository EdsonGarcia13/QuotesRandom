import React, { useState } from 'react';
import Buttonn from './buttonn';
import quotes from './quotes.json';

const Quotes = () => {

    const quotesRandom = quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, setQuote] = useState([]);
    const aleatorio = () => {
        setQuote(quotesRandom);
    };


        const randomColor = () => {
        const colors = ["#FA6A1C", "#0B54A2", "#9722F8", "#3E046E", "#2FDB0D", "#0FCF8A"];
        const color = Math.floor(Math.random() * colors.length);
        return colors[color];
    };
    
    const colorize = randomColor();
    document.body.style= `background: ${colorize}`;

  
   
    return (
        <div className='randomQuotes'  style={{color: colorize}}>
            <i className="fa-solid fa-quote-left"></i> 
            <h1> {quote.quote}</h1>
            <h2>{quote.author}</h2>
            <Buttonn motor={aleatorio}/>
        </div>
    );
};

export default Quotes;


