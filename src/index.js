import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
class Myform extends React.Component
{
    render(){
        return(
            <form>
               <div class="togglearea">
                    <nav>
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
            <label for="toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
                </nav>
                </div>
            <input id="toggle" type="checkbox"/>
                <div class="navbar">
                <a href="#">All lists</a>
                <a href="#">Personal</a>
                <a href="#">Work</a>
                <a href="#">Grocery list</a>
                <a href="#">New list</a>
                </div>
                <div id="sec"> 
                <div id="sec2"> 
                <div id="sec3">
                <input id="input"  placeholder="Add task..." />
                <div id="sec4">
                <ul id="list"/>
                </div>
                </div>
                </div>
                </div>
        </form>
        );
    }
}
ReactDOM.render(<Myform />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
