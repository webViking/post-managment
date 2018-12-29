import React, {Component} from 'react'

import Notifications from './Notifications'
import ProjectLists from '../projects/ProjectLists'

export default class Dashboard extends Component{
   



    render(){


        return(
            <div className = "container">
                <div className = "row">
                    <div className = "col s12 m6">
                        <ProjectLists/>
                    </div>
                    <div className = "col s12 m3 offset-1">
                        <Notifications/>
                    </div>
                </div>


            </div>

        )
    }
}



