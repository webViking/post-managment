import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

//Reducers
import authReducer from './store/reducers/authReducer'
import projectReducer from './store/reducers/projectReducer'

//Redux 
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

//Firebase
import  { getFirestore,reduxFirestore,} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/firebaseConfig'
import {firestoreReducer} from 'redux-firestore'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//firestore reducer is resposible for syncing our data in our component with also use firestoreConenct to connect  sigle collection in Dashborad.js which is synced to property in index.js > firestore
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
})


const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({
        getFirebase,getFirestore
    })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
    )    
)

const app = (
    <BrowserRouter>
        <Provider store = {store}>
            <App/>
        </Provider>
    </BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
