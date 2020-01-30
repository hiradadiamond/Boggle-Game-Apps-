import React, {Component} from 'react'
import Jumbotron from './Jumbotron'
import GameContainer from './GameContainer/GameContainer'
import {BrowserRouter, Switch, Route } from 'react-router-dom';


class Login extends Component{
 render(){
    return(
      <BrowserRouter>

    <Switch>
      <Route exact path='/' component={Jumbotron} />
      <Route exact path="/game/:slug" component={GameContainer} />

    </Switch>
    </BrowserRouter>

      )
  }

}
export default Login
