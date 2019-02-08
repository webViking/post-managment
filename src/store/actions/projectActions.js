
export const creatProjectStart = () => {
    return {
        type: 'CREATE_PROJECT_START'
    }
}
export const createProjectError = (err) => {
    return{
        type: "CREATE_PROJECT_ERROR",
        err: err
    }
}
export const createProjectSuccess = (project) =>{
    return{
        type: "CREATE_PROJECT_SUCCESS",
        project
    }
}

export const createProject = (project) => {
    //getFirebase,getFirestore imported from index.js file
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch(creatProjectStart())
        //make async call to database
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        //we getting access to firestore in firebase page
        const firestore = getFirestore()
        //we getting 2 props title & content from createProject file
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch(createProjectSuccess(project))
        }).catch(err => {
            dispatch(createProjectError(err))
        })

    }
}
export const deleteProjectStart = () =>{
    return{
        type:"DELETE_PROJECT_START"
    }
}
export const deleteProjectSuccess = (id) =>{
    return{
        type: "DELETE_PROJECT_SUCCESS",
        id:id
    }
}
export const deleteProjectFailed = (err) =>{
    return{
        type: "DELTE_PROJECT_FAILED",
        err:err
    }
}

export const deleteProject = (id) =>{
    return (dispatch,getState,{getFirestore}) =>{
        dispatch(deleteProjectStart())
        const firestore = getFirestore()
        firestore.collection('projects').doc(id).delete()
        .then((res)=>{
            dispatch(deleteProjectSuccess(id))
        }).catch((err)=>{
            dispatch(deleteProjectFailed(err))
        })
    }
}