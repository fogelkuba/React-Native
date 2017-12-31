import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false
        };
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDTQzdnibjgpVlXIulxjdhP-Vv6GTpQbFM',
            authDomain: 'auth-react-native-16ad4.firebaseapp.com',
            databaseURL: 'https://auth-react-native-16ad4.firebaseio.com',
            projectId: 'auth-react-native-16ad4',
            storageBucket: 'auth-react-native-16ad4.appspot.com',
            messagingSenderId: '995157792639'
        });

        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                })
            }else {
                this.setState({
                    loggedIn: false
                })
            }
        });
    };

    renderContent(){
        if (this.state.loggedIn) {
            return(
                <Button>
                    Log out
                </Button>
            )
        }else{
            return(
                <LoginForm />
            )
        }
    }
    
    render(){
        return(
            <View>
                <Header headerText="Authentification" />
                {this.renderContent()}
            </View>
        )
    };

}
export default App;
