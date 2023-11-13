import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'



class RandomQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qrandom: Math.floor(Math.random() * 23),
            crandom: Math.floor(Math.random() * 16)};
        this.new = this.new.bind(this);
    }

    new() {
        this.setState({
            qrandom: Math.floor(Math.random() * 23),
            crandom: Math.floor(Math.random() * 16)
        });
    }
    render(){
        const quotes = [['You must be the change you wish to see in the world.', 'Mahatma Gandhi'], ['It is hard to fail but it is worse never to have tried to succeed.', 'Theodore Roosevelt'], ["I have not failed. I've just found 10,000 ways that won't work.", 'Thomas A. Edison'], ["Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.", 'Wayne Dyer'], ['The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.', 'Michelangelo'], ['The two most important days in your life are the day you are born and the day you find out why.', 'Mark Twain'], ['When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.', 'Henry Ford'], ['Never bend your head. Always hold it high. Look the world straight in the eye.', 'Helen Keller'], ['Do not go where the path may lead , go instead where there is no path and leave a trail.', 'Ralph Waldo Emerson'], ["I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", 'Muhammad Ali'], ['Life is what happens to you while you’re busy making other plans.', 'John Lennon'], ['Life isn’t about getting and having, it’s about giving and being.', 'Kevin Kruse'], ['Your time is limited, so don’t waste it living someone else’s life.', 'Steve Jobs'], ['Go confidently in the direction of your dreams. Live the life you have imagined.', 'Henry David Thoreau'], ['It is never too late to be what you might have been.', 'George Eliot'], ['Life is not measured by the number of breaths we take, but by the moments that take our breath away.', 'Maya Angelou'], ['We must balance conspicuous consumption with conscious capitalism.', 'Kevin Kruse'], ['Our lives begin to end the day we become silent about things that matter.', 'Martin Luther King Jr.'], ['The person who says it cannot be done should not interrupt the person who is doing it.', 'Chinese Proverb'], ['Either write something worth reading or do something worth writing.', 'Benjamin Franklin'], ['Every child is an artist. The problem is how to remain an artist once he grows up.', 'Pablo Picasso'], ['There is only one way to avoid criticism: do nothing, say nothing, and be nothing.', 'Aristotle'], ['You become what you believe.', 'Oprah Winfrey']]

        const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", '#782278', '#10cdf7', '#2b00ff'];
        const quote = quotes[this.state.qrandom][0];
        const color = colors[this.state.crandom];
        return(<>
            
            <body style={{backgroundColor: color, transition: '0.75s ease-in-out', overflow: 'hidden', height: '100vh'}}>
                <div id="quote-box">
                    <div class="quote-text">
                    <FontAwesomeIcon style={{color: color, transition: '0.75s ease-in-out'}} icon={faQuoteLeft} /><span id="text" style={{color: color, transition: '0.75s ease-in-out'}}> {quote}</span>
                    </div>
                    <div class="quote-author">
                    <span id="author" style={{color: color, transition: '0.75s ease-in-out'}}>- {quotes[this.state.qrandom][1]}</span>
                    </div>
                    <div class="buttons" >
                    <a style={{backgroundColor: color, transition: '0.75s ease-in-out'}} class="button" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes[this.state.qrandom][0])}`}  rel="noreferrer" title="Tweet this quote!" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a style={{backgroundColor: color, transition: '0.75s ease-in-out'}} class="button" id="tumblr-quote" href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Unknown&amp;content=You%20can%E2%80%99t%20fall%20if%20you%20don%E2%80%99t%20climb.%20%20But%20there%E2%80%99s%20no%20joy%20in%20living%20your%20whole%20life%20on%20the%20ground.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button" 
 rel="noreferrer" title="Post this quote on tumblr!" target="_blank">
                        <FontAwesomeIcon icon={faTumblr} />
                    </a>
                    <button style={{backgroundColor: color, transition: '0.75s ease-in-out'}} class="button" id="new-quote" onClick={this.new}>New quote</button>
                </div>
                </div>
                <div class="footer"> by <a class='anas' href="https://github.com/anasrustom">Anas</a></div>
            </body>
        </>)

    }}   
 


export default RandomQ;
