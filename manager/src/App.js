import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

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
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        )
    }
};

export default App;
