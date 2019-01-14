import React from 'react'
import ReactDOM from 'react-dom'
import { init } from '@rematch/core'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import * as models from './models'

import './assets/css/main.css';

const store = init({ models })

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
