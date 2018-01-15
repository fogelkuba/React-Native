import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        )
    }
};

export default App;
