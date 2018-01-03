import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'animate.css'

import StatisticsPage from './components/StatisticsPage'

const FourOhFour = () => (
  <div>nuh find</div>
)

const App = () => (
  <BrowserRouter key={Math.random()}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={StatisticsPage} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
