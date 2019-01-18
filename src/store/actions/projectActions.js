export const createProject = (project) =>{
    //getFirebase,getFirestore imported from index.js file
    return (dispatch,getState, {getFirebase,getFirestore}) =>{
        //make async call to database

        //we getting access to firestore in firebase page
        const firestore = getFirestore()
        //we getting 2 props title & content from createProject file
        firestore.collection('projects').add({
            ...project,
            authorFirstName:"web",
            authorLastName:"Ninja",
            authorId:321123,
            createdAt: new Date()
        }).then(() =>{
        dispatch({type:'CREATE_PROJECT', project: project})
        }).catch(err =>{
        dispatch({type:"CREATE_PROJECT_ERROR", err})
        })
        
    }
}