import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import store from './store'

const renderApp = () => {
  render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
};

renderApp();

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./components/app', () => {
      renderApp()
    })
  }
}
