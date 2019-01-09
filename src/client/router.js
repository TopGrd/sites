import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const Progress = () => <div>loading</div>
const Nav = lazy(() => import('./components/Nav'))

class Router extends React.PureComponent {
  state = {
    percent: 100
  }

  render() {
    return (
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route exact path="/" render={() => <Nav />} />
        </Switch>
      </Suspense>
    )
  }
}

export default Router
