import React from 'react'

import './SideDrawer.scss'

import SignInLink from '../layout/SingInLink'
import SignOutLink from '../layout/SignOutLink'

const sideDrawer = (props) =>{
    let sideDrawerClasses = 'side-drawer'
    if(props.show){
        sideDrawerClasses = 'side-drawer open'
    }
    
    return(
        <nav className = {sideDrawerClasses}>
            <ul>
                <SignInLink/>
                <SignOutLink/>
            </ul>
        </nav>
    )
}

export default sideDrawer 