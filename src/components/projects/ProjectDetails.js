import React,{Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import Spinner  from '../spinner/Spinner'
import moment from 'moment'
import {deleteProject} from '../../store/actions/projectActions'

import './pDetails.css'
class ProjectDetails extends Component{
    deleteProjectHandler = () =>{
        this.props.onDelete(this.props.match.params.id)
        this.props.history.push('/')
    }
    render(){
        const {projectProperty} = this.props
        if(!this.props.auth.uid){
            return <Redirect to = "/signin"/>
        }

        let proDetails = this.props.error ? <p>Something go wrong</p> : <Spinner/>
        if(projectProperty){
            proDetails = (
                
                <div className="card z-depth-0">
                 <div className="card-content" >
                        <div className = "right">
                        <span className = "p__details-span" onClick ={this.deleteProjectHandler}>X</span>
                        </div>
                     <span className="card-title">
                         {projectProperty.title}
                     </span>
                     <p>{projectProperty.content}</p>
                 </div>
                 <div className="card-action  lighten-4 grey-text">
                     <div>Posted by {projectProperty.authorFirstName} {projectProperty.authorLastName}</div>
                     <div>{moment(projectProperty.createdAt.toDate()).format('LLLL')}</div>
                 </div>
             </div>
            
            )     
        }
        return(
            <div className="container section project-details">
            {proDetails}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{

    
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        projectProperty: project,
        auth: state.firebase.auth,
        loading:state.auth.loading,
        error:state.project.err
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onDelete: (id)=>dispatch(deleteProject(id))
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([{collection:'projects'}])
) (ProjectDetails)