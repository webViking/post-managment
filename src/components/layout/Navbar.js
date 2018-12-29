import React from 'react'
import {Link} from 'react-router-dom'

import SignInLink from './SingInLink'
import SignOutLink from './SignOutLink'


const Navbar = ()=>{

    return(
        <nav className = "nav-wrapper teal">
            <div className = "container">
                <Link to="/" className="brand-logo">Post Managment</Link>
                <SignInLink/>
                <SignOutLink/>
                
            </div>
        </nav>
    ) 
}

export default Navbar