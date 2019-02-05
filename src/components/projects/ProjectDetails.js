import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'



const ProjectDetails = (props)=>{
   const {projectProperty} = props
   console.log(projectProperty)
    if(!props.auth.uid){
        return <Redirect to = "/signin"/>
    }
   if(projectProperty){
       return(
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">
                    {projectProperty.title}
                </span>
                <p>{projectProperty.content}</p>
            </div>
            <div className="card-action  lighten-4 grey-text">
                <div>Posted by {projectProperty.authorFirstName} {projectProperty.authorLastName}</div>
                <div>1 January 2019 , 10am</div>
            </div>
        </div>
        </div>
       )     
   }else{
       return(
           <div className="container center">
           Loadding...
           </div>
       )
   }
    
    
}
const mapStateToProps = (state,ownProps) =>{

    
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    console.log(projects)
    const project = projects ? projects[id] : null
    return{
        projectProperty: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'projects'}])
) (ProjectDetails)