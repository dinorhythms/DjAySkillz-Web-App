import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducer
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyApCinal5-75Zw4qzhLefatgxmbbTj2XOs",
    authDomain: "djayskillz-e0e3b.firebaseapp.com",
    databaseURL: "https://djayskillz-e0e3b.firebaseio.com",
    projectId: "djayskillz-e0e3b",
    storageBucket: "djayskillz-e0e3b.appspot.com",
    messagingSenderId: "375811577148"

}

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig);

            const firestore = firebase.firestore();
            const settings = {/* your settings... */ timestampsInSnapshots: true};
            firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer 
});

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;