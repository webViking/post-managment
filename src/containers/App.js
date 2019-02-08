import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom'

//Styling imports
import {createGlobalStyle} from 'styled-components';
//Components imports
import Navbar from '../components/layout/Navbar'
import Dashboard from '../components/dashboard/Dashboard';
import ProjectDetails from '../components/projects/ProjectDetails'
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import CreateProject from '../components/projects/CreateProjects';



//28

export default class App extends Component {
  
  render() {
  const GlobalStyles = createGlobalStyle`
    body{
      padding:0;
      margin:0;
      background: #b2dfdb;
    }
    *{
      box-sizing:border-box;
    }
    form{
      padding:20px;
      margin-top:60px;
    }
    form button, form h5{
      margin:20px 0;
    }
    input[type=text]:not(.browser-default):focus:not([readonly]),
    input[type=email]:not(.browser-default):focus:not([readonly]),
    input[type=password]:not(.browser-default):focus:not([readonly]),
    textarea.materialize-textarea:focus:not([readonly]){
    border-color: #ec407a;
    box-shadow: none;
    }
    input[type=text]:not(.browser-default):focus:not([readonly]) + label,
    textarea.materialize-textarea:focus:not([readonly]) + label,
    input[type=email]:not(.browser-default):focus:not([readonly]) + label,
    input[type=password]:not(.browser-default):focus:not([readonly]) + label{
    color: #ec407a !important;
}


  `

    return (
      <React.Fragment>
        <GlobalStyles/>
            <Navbar/>
        <Switch>
          <Route exact path ="/" component = {Dashboard}/>
          <Route path ="/project/:id" component= {ProjectDetails}/>
          <Route path="/signin" component = {SignIn}/>
          <Route path = "/signup" component = {SignUp}/>
          <Route path="/create-project" component = {CreateProject}/>
        </Switch>
         
      </React.Fragment>
    );
  }
}

