import React from 'react'

import './Backdrop.scss'

const backdrop = (props) =>{

    return(
        <React.Fragment>
            {props.show ? <div onClick ={props.clicked} className = "Backdrop"></div>: null }
        </React.Fragment>
        
        
    )
}
export default backdrop