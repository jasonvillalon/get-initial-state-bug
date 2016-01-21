import React from "react"
import {Link, Router, Route, IndexRoute, browserHistory} from "react-router"

import TestComponent from "./test-component"

const NotFound = React.createClass({
  render() {
    return (
      <div>Not Found</div>
    )
  }
})

const AppRoute = (
  <Router history={browserHistory}>
    <Route path="/" component={TestComponent} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default AppRoute
