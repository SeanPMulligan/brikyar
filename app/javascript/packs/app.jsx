import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'

import Home from '../components/Home';
import Cards from '../components/Cards';

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Cards} />
        <Route path='/cards' component={Cards} />
      </Switch>
    </main>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  )
})
