import React from 'react'

import './SideDrawer.scss'
import { connect } from 'react-redux'
import SignInLink from '../layout/SingInLink'
import SignOutLink from '../layout/SignOutLink'

const sideDrawer = (props) => {
    let sideDrawerClasses = 'side-drawer'
    if (props.show) {
        sideDrawerClasses = 'side-drawer open'
    }
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
        <div className={sideDrawerClasses}>
        
            {links}
         
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(sideDrawer) 