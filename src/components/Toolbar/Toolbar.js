import React from 'react'

import HamburgerBtn from '../SideDrawer/HamburgerBtn'
import './Toolbar.scss'
import {connect} from 'react-redux'
import SignInLink from '../layout/SingInLink'
import SignOutLink from '../layout/SignOutLink'
import {Link} from 'react-router-dom'
const toolbar = (props) => {
    const {profile} = props
    let links = null
    if(props.auth.uid){
        links = (
            <SignInLink profileProp = {profile}/>
        )
        
    }else{
        links = <SignOutLink/>
    }
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className = "toolbar__toggle-button">
                    <HamburgerBtn clicked={props.hamburgerClicked} />
                </div>
                <div className="toolbar__logo"><Link to = '/'>Post Managment</Link></div>
                <div className="space"></div>
                <div className="toolbar__navigation-items">
                   
                        {links}
                    
                </div>
            </nav>
        </header>

    )
}
const mapStateToProps = (state) => {
    return{
        //this is initial firebase prop
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(toolbar)