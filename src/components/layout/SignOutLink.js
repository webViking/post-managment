import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLink = ()=>{

    return(
        <ul className = "center">
            <li><NavLink to ="/signin">LogIn</NavLink></li>
            <li><NavLink to ="/signup">SignUp</NavLink></li>
            
        </ul>
    ) 
}

export default SignOutLink