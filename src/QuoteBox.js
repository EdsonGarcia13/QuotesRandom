import React, { useState } from 'react';
import Buttonn from './buttonn';
import quotes from './quotes.json';

const Quotes = () => {

    const quotesRandom = quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, setQuote] = useState(quotesRandom);
    const aleatorio = () => {
        setQuote(quotesRandom);
    };

    const randomColor = () => {
        const color = Math.floor(Math.random() * 23345623).toString(16);
        return '#' + color;
    };
    
    const colorize = randomColor();
    document.body.style= `background: ${colorize}`;
   
    return (
        <div className='randomQuotes'  style={{color: colorize}}>
            <i className="fa-solid fa-quote-left"></i> 
            <h1> {quote.quote}</h1>
            <h2>{quote.author}</h2>
            
            <div>
            <Buttonn motor={aleatorio}/>
            </div>

        </div>
    );
};

export default Quotes;


