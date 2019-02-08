
export const authStart = () =>{
    return{
        type:"AUTH_START"
    }
}
export const loginSuccess = () =>{
    return{
        type:"LOGIN_SUCCESS"
    }
}
export const loginError = (err) =>{
    return{
        type:'LOGIN_ERR',
        err:err
    }
}
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch(authStart())
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch(loginSuccess())

        }).catch(err => {
            dispatch(loginError(err))
        })

    }
}

export const singOutSuccess = () =>{
    return {
        type: "SIGNOUT_SUCCESS"
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signOut()
            .then(() => {
                dispatch(singOutSuccess())
            })
    }
}

export const signUpStart = () =>{
    return{
        type: "SIGNUP_START"
    }
}
export const signUpSuccess = () =>{
    return{
        type:"SIGNUP_SUCCESS"
    }
}
export const signUpError = (err) =>{
    return{
        type:"SIGNUP_ERROR",
        err
    }
}
export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        dispatch(signUpStart())
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            console.log(res.user)
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0],

            })
        }).then(() =>{
            dispatch(signUpSuccess())
        }).catch((err)=>{
            dispatch(signUpError(err))
        })
    }
}