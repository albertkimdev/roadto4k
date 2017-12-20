import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './app'
import store from './store'

const renderApp = () => {
  render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp()
  })
}
