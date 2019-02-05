import React, { Component } from 'react'

import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectLists'

import { firestoreConnect } from 'react-redux-firebase'

import { connect } from 'react-redux'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

class Dashboard extends Component {



    render() {
        //this past props to ProjectList component
        const { projects } = this.props;
        let permit = null
        if (this.props.auth.uid) {
            permit = (
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects} />
                    </div>
                    <div className="col s12 m3 offset-1">
                        <Notifications />
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
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(Dashboard)

