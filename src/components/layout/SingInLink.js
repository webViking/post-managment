import React from 'react'
import {NavLink} from 'react-router-dom'

const SignInLink = ()=>{

    return(
        <ul className = "right">
            <li><NavLink to ="/create-project">New Project</NavLink></li>
            <li><NavLink to ="/">Log Out</NavLink></li>
            <li><NavLink to ="/" className ="btn btn-floating blue lighten-1">A</NavLink></li>
        </ul>
    ) 
}

export default SignInLink