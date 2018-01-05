import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'animate.css'

import Header from './header'
import Footer from './footer'
import StatisticsPage from './StatisticsPage'
import HomePage from './HomePage'

const FourOhFour = () => (
  <div>nuh find</div>
)

const App = () => (
  <BrowserRouter key={Math.random()}>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={StatisticsPage} />
        <Route exact path="/home" component={HomePage} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
