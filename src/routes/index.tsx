import { Route, Switch, Redirect } from 'react-router-dom'
import Companies from '../components/Companies'
import React from 'react'

const Routes: React.FunctionComponent = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/companies/:id?" component={Companies} />
      <Route exact path="/">
        <Redirect to="/companies" />
      </Route>
    </Switch>
  )
}

export default Routes
