import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectLists = ({projects})=>{
    
    //{project && we check if are projects if there wont be then the second part wont execute
    return(

        <div className = "project-list section">
        
            {projects && projects.map(project=>{
                //project = {project} we passing as a props to ProjectSUmmary component because we want to execute props already have
                return(
                <Link to ={'/project/' + project.id} key ={project.id} >
                <ProjectSummary projects = {project} />
                </Link>

                )
                
                
            })}
        </div>
         
        )
    }
    
    export default ProjectLists
    
    
    
    
    
    
    
    