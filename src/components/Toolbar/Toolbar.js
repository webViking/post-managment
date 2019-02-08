import React from 'react'

import HamburgerBtn from '../SideDrawer/HamburgerBtn'
import './Toolbar.scss'

import SignInLink from '../layout/SingInLink'
import SignOutLink from '../layout/SignOutLink'


const toolbar = (props) => {
    const {profile} = props
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className = "toolbar__toggle-button">
                    <HamburgerBtn clicked={props.hamburgerClicked} />
                </div>
                <div className="toolbar__logo"><a href="/">Post Management</a></div>
                <div className="space"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <SignInLink profileProp = {profile}/>
                        <SignOutLink/>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default toolbar