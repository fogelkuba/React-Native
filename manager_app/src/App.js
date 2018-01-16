import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDONx4_ATFJFdquIPPdidGZMnU8A4bfV68',
            authDomain: 'manager-23c8a.firebaseapp.com',
            databaseURL: 'https://manager-23c8a.firebaseio.com',
            projectId: 'manager-23c8a',
            storageBucket: 'manager-23c8a.appspot.com',
            messagingSenderId: '529527290207'
        };
        firebase.initializeApp(config);
    };

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
};

export default App;
