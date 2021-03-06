import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import client from './services/client-graphql'

import Login from './pages/Login'
import Home from './pages/Home'

import NoMatch from './pages/404'

export default function Routes() {
    return (
        <ApolloProvider client={ client }>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" exact component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    )
}