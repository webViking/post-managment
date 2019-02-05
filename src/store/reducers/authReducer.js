const initialState = {
    authError: null
}

 const authReducer = (state = initialState, action) =>{
     switch(action.type){
        case 'LOGIN_SUCCESS':
        console.log('Login success')
        return {
            ...state,
            authError: null
        }
        case 'LOGIN_ERR':
        console.log('Login failed')
        return{
            ...state,
            authError: 'Fail'
        }
        case 'SIGNOUT_SUCCESS':
        console.log('SignOut success')
        return{
            ...state
        }
        default:
        return state
     }
   
}

export default authReducer
