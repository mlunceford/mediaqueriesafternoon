import React from 'react';
import './reset.css'
import './App.css';

class App extends React.Component {
    constructor(){
        super()
        this.dropdown = React.createRef()

        this.state = {

        }
    }
    render(){
        return (
            <div className="App">
                <nav>
                    <div className="text">Start Bootstrap</div>
                    <button className='fas fa-bars fa'></button>
                    <div className="buttonBar"> 
                        <div className="button">SERVICES</div>
                        <div className="button">PORTFOLIO</div>
                        <div className="button">ABOUT</div>
                        <div className="button">TEAM</div>
                        <div className="button">CONTACT</div>
                    </div>
                </nav>
                <div className="img">
                    <div className="text-img">Welcome To Our Studio!</div>
                    <div className="text-img2">IT'S NICE TO MEET YOU</div>
                    <button className='button-img'>TELL ME MORE</button>
                </div>
          </div>
        );

    }
}

export default App;
