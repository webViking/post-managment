import React from 'react'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
//import Spinner from '../spinner/Spinner'

const SignInLink = (props) => {
 
    
    return (
        
        <ul className="right">
            <li><NavLink to="/create-project">New Project</NavLink></li>
            <li><NavLink to="/" onClick={props.onLogOut}> Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue lighten-1">{props.profileProp.initials}</NavLink></li>
        </ul>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => { dispatch(signOut()) }
    }
}

export default connect(null, mapDispatchToProps)(SignInLink)