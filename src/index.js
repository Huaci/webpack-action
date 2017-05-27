import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'
import store from './store/store.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import  Login  from './components/home/Login';
import  Home  from './components/home/Home';
ReactDOM.render(
      <App store={store} />,
    document.getElementById('root')
)
