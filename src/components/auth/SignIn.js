import React, { Component } from 'react'

import { connect } from 'react-redux'

import { signIn } from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import Spinner from '../spinner/Spinner'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            //id password or email
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSignIn(this.state)
    }
    render() {  
        let LogInForm = null
        if(this.props.loading){
            LogInForm = (
                <div className = "center">
                    <Spinner/>
                </div>
            )
        }else{
            LogInForm = (

                <form onSubmit={this.handleSubmit} className="white">
                    <div className="red-text center">
                        {this.props.authErr ? <p>{this.props.authErr}</p> : null}
                    </div>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Login</button>

                    </div>
                </form>
            )
        }
        if(this.props.auth.uid){
            return <Redirect to="/" />
        }
        return (
            <div className="container">
                {LogInForm}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authErr: state.auth.authError,
        auth: state.firebase.auth,
        loading: state.auth.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (credentials) => { dispatch(signIn(credentials)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)