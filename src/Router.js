import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from 'pages/Welcome'
import Playground from 'pages/Playground'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/playground" component={Playground} />
            </Switch>
        </BrowserRouter>
    )
}