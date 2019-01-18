import React, {Component} from 'react'

import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectLists'

import {firestoreConnect} from 'react-redux-firebase'

import {connect} from 'react-redux'
import{compose} from 'redux'

class Dashboard extends Component{



    render(){
        console.log(this.props)
        //this past props to ProjectList component
       const {projects} = this.props;

        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col s12 m6">
                    <ProjectLists projects= {projects}/>
                    </div>
                    <div className = "col s12 m3 offset-1">
                        <Notifications/>
                    </div>
                </div>


            </div>

        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
       projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
       collection: 'projects'     
    }])
) (Dashboard) 

