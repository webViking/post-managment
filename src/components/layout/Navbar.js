import React from 'react'

import {Link} from 'react-router-dom'

import SignInLink from './SingInLink'
import SignOutLink from './SignOutLink'


import {connect} from 'react-redux'

const Navbar = (props)=>{
    const {profile} = props

    let links = null
    if(props.auth.uid){
        links = (
            <SignInLink profileProp = {profile}/>
        )
        
    }else{
        links = <SignOutLink/>
    }
    return(
        <nav className = "nav-wrapper teal">
            <div className = "container">
                <Link to="/" className="brand-logo">Post Managment</Link>
                {links}
            </div>
        </nav>
    ) 
}
const mapStateToProps = (state) => {
    return{
        //this is initial firebase prop
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar)