import React from 'react'

const ProjectDetails = (props)=>{
    console.log(props)
    const id = props.match.params.id
    return(
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">
                    Project Title - {id}
                </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum quaerat labore, dolores dolor sequi nam minus excepturi sit, perspiciatis quam voluptates adipisci unde sapiente natus facilis sint! Ut, doloribus!</p>
            </div>
            <div className="card-action  lighten-4 grey-text">
                <div>Posted by webViking</div>
                <div>1 January 2019 , 10am</div>
            </div>
        </div>
        </div>
        
    )
}

export default ProjectDetails