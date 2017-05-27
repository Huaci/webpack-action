import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import  Login  from './Login';
import  Home  from './Home';
export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login">login</Link></li>
                    </ul>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        )
    }

}