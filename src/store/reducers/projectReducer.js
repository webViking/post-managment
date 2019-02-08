const initialState = {
   loading: false,
   id:null, 
   err:null
}

 const projectReducer = (state = initialState, action) =>{
    switch(action.type){

        case "CREATE_PROJECT_START":
            return {
                ...state,
                loading:true
            }
        case "CREATE_PROJECT_ERROR":
            return {
                ...state,
                loading:false
            }
        case "CREATE_PROJECT_SUCCESS":
        return{
            ...state,
            loading:false,
        }
        case "DELETE_PROJECT_START":
        return{
            ...state,
            loading:true
        }
        case "DELETE_PROJECT_SUCCESS":
        return{
            ...state,
            loading:false,
            id:action.id
        }
        case "DELTE_PROJECT_FAILED":
        return{
            ...state,
            loading:false,
            err:action.err
        }
        default: 
        return state
    }
   
}

export default projectReducer
