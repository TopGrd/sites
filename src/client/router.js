import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Progress = () => <div>loading</div>
const App = lazy(() => import('./components/App'))

class Router extends React.PureComponent {
  state = {
    percent: 100
  }

  render() {
    return (
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route exact path="/" render={() => <App />} />
        </Switch>
      </Suspense>
    )
  }
}

export default Router
