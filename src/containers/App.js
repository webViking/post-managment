import React, { Component } from 'react';

import {Route,Switch} from 'react-router-dom'

//Styling imports
import styled,{createGlobalStyle} from 'styled-components';
//Components imports
import Navbar from '../components/layout/Navbar'
import Dashboard from '../components/dashboard/Dashboard';
import ProjectDetails from '../components/projects/ProjectDetails'
//HOC imports
import Auxi from '../hoc/Auxi'


//8


export default class App extends Component {
  
  render() {
  const GlobalStyles = createGlobalStyle`
    body{
      padding:0;
      margin:0;
    }
    *{
      box-sizing:border-box;
    }
  `

    return (
      <Auxi>
        <GlobalStyles/>
            <Navbar/>
        <Switch>
          <Route exact path ="/" component = {Dashboard}/>
          <Route path ="/project/:id" component= {ProjectDetails}/>
        </Switch>
         
      </Auxi>
    );
  }
}

