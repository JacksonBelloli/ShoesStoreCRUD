import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Client from './Client'
import Seller from './Seller'

export default class Main extends React.Component{
    render(){
        return(           
            <Router>
                <Switch>                                       
                    <Route path="/client">
                        <Client />
                    </Route>
                    <Route path="/seller">
                        <Seller />
                    </Route>
                </Switch>
            </Router>                   
        )                
    }
}