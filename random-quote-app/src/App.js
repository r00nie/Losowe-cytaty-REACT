import React from "react";
import axios from 'axios';
import { FaTwitterSquare} from "react-icons/fa";

import "./App.css";



class App extends React.Component {
    colors = ["#292F36", "#4ECDC4", "#FF6B6B", "#FFE66D", "#246EB9", "#4CB944", "#F06543", "#252422", "#EB5E28", "#403D39", "#5603AD", "#80475E", "#CC5A71"];

    constructor(props){
        super(props);
        this.fetchQuote = this.fetchQuote.bind(this);
    }

    state = {
        text: "",
        author: "",
        color: ""
    };
    
    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote(){
        let randomColor = Math.floor(Math.random() * this.colors.length);
        let colorPick = this.colors[randomColor];
        this.setState({
            color: colorPick
        })
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
            .catch((error) => {
                console.log(error);
            })
    };

    

    render(){
        const btnAndAppColor = {backgroundColor : this.state.color}
        return (
            <div className="App" style={btnAndAppColor}>
                <div className="quote-box">
                    <p id="text-p">{this.state.text}</p>
                    <p id="author-p">{this.state.author !== null ? "- "+  this.state.author : " "}</ p>
                    <div className="btn-container">
                        <button className="get-quote-btn" style={btnAndAppColor} onClick={this.fetchQuote}>Get quote</button>
                        <a href={"https://twitter.com/intent/tweet?text="+ this.state.text + "    ~~ "+ this.state.author} target="_blank" rel="noopener noreferrer" className="twitter-link"><FaTwitterSquare className="twitter-btn" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


