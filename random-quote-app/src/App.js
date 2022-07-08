import React from "react";
import axios from 'axios';

import "./App.css";


class App extends React.Component {

    constructor(props){
        super(props);
        this.fetchQuote = this.fetchQuote.bind(this);
    }

    state = {
        text: "",
        author: ""
    };
    
    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote(){
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then(((json) => {
                let randomNum = Math.floor(Math.random() * json.length);
                let data = json[randomNum];
                this.setState({
                    text: data.text,
                    author: data.author
                })
            }))
    };

    

    render(){
        return (
            <div className="App">
                <div className="quote-box">
                    <p id="text-p">{this.state.text}</p>
                    <p id="author-p">- {this.state.author}</p>
                    <div className="btn-container">
                        <button className="get-quote-btn" onClick={this.fetchQuote}>Get quote</button>
                        <a href="" className="twitter-btn">Twitter</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


