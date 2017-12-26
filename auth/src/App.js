import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDTQzdnibjgpVlXIulxjdhP-Vv6GTpQbFM',
            authDomain: 'auth-react-native-16ad4.firebaseapp.com',
            databaseURL: 'https://auth-react-native-16ad4.firebaseio.com',
            projectId: 'auth-react-native-16ad4',
            storageBucket: 'auth-react-native-16ad4.appspot.com',
            messagingSenderId: '995157792639'
        });
    }
    render(){
        return(
            <View>
                <Header headerText="Authentification" />
                <LoginForm />
            </View>
        )
    }
}
export default App;
