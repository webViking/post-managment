import React, { Component } from 'react'

import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectLists'

import { firestoreConnect } from 'react-redux-firebase'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'
//import Spinner from '../spinner/Spinner'

class Dashboard extends Component {



    render() {
        //this past props to ProjectList component
        const { projects, notifications } = this.props;

        let permit = null
        if (this.props.auth.uid) {
            permit = (
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects} />
                    </div>
                    <div className="col s12 m3 offset-1">
                        <Notifications projectNotifications = {notifications}/>
                    </div>
                </div>
            )
        } else {
            permit = <Redirect to="/signin" />
        }

        return (
            <div className="container">

                {permit}

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        loading: state.auth.loading,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects',orderBy:['createdAt','desc']},{collection:'notifications', limit:3, orderBy:['time','desc']}])
)(Dashboard)

