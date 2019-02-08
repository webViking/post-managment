const initialState = {
    authError: null,
    loading: false,
    authRedirect: '/'
}

 const authReducer = (state = initialState, action) =>{
     switch(action.type){
        case 'AUTH_START':
        return{
            ...state,
            loading: true
        }
        case 'LOGIN_SUCCESS':
        console.log('Login success')
        return {
            ...state,
            authError: null,
            loading: false
        }
        case 'LOGIN_ERR':
        console.log('Login failed')
        return{
            ...state,
            authError: action.err.message,
            loading: false
        }
        case 'SIGNOUT_SUCCESS':
        console.log('SignOut success')
        return{
            ...state,
            loading:false
        }
        case "SIGNUP_START":
        return{
            ...state,
            loading:true
        }
        case "SIGNUP_SUCCESS":
        console.log('signup_success')
        return{
            ...state,
            authError:null,
            loading: false
        }
        case "SIGNUP_ERROR":
        console.log('sugnup -err ')
        return{
            ...state,
            authError: action.err.message,
            loading: false
        }
        default:
        return state
     }
   
}

export default authReducer
