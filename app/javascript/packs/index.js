import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from '../components/Login/Login'
import '../../assets/stylesheets/game.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  <Login/>, document.body.appendChild(document.createElement('div')),
  )
})
