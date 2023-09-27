import React from 'react'
import {BrowserRouter as Route, Router, Switch} from 'react-router-dom'
import Dashboard from './Dashboard'
import Categories from './Categories'
import Products from './Products'
import Customer from './Customer'
import Inventory from './Inventory'
import Reports from './Reports'
import Settings from './Settings'

const AppRouter = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products} />
            <Route path="/customer" component={Customer} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/reports" component={Reports} />
            <Route path="/settings" component={Settings} />
        </Switch>
  </Router>
  )
}

export default AppRouter
