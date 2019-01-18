import React from 'react'

const ProjectSummary = ({projects})=>{

    return(
        <div className = "card z-depth-0 project-summary">
            <div className = "card-content grey-text text-darken-3">
                <span className = "card-title">{projects.title}</span>
                <p>Posted by webViking</p>
                <p className="grey-text">1st January 2019, 10am</p>
            </div>
        </div>
    )
}

export default ProjectSummary