import React from 'react';
import { Switch, Route } from "react-router-dom"
import Main from './Main/Main';
import Other from './Other/Other';

function Routers () {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/other' component={Other}/>
        </Switch>
    )
}

export default Routers