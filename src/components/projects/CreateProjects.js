import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import Spinner from '../spinner/Spinner'

//import styled from 'styled-components'
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }   
    render() {
        let createdProject = null
        if(this.props.loading){
            createdProject =  <Spinner/>
            
        }else{
            createdProject = (
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project </h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            )
        }
        //Guarding Routes
        if (!this.props.auth.uid) {
            return <Redirect to="/signin" />
        }
        return (
            <div className="container">
            {createdProject}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        loading: state.project.loading,
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)