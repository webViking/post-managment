import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import Spinner from '../spinner/Spinner'
//Add Spinner

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            //id password or email
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSignUp(this.state)
    }


    render() {
        let signedUp = null
        if (this.props.loading) {
            signedUp = <Spinner />
        } else {
            signedUp = (

                <form onSubmit={this.handleSubmit} className="white">
                    {this.props.authError ? <p className="center" style={{ color: 'red' }}>{this.props.authError}</p> : null}
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
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            )
        }

        if (this.props.auth.uid) {
            return <Redirect to="/signin" />
        }
        return (
            <div className="container">
            {signedUp}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
        loading: state.auth.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (newUser) => { dispatch(signUp(newUser)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)