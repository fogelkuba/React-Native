import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            err: ''
        };
    }

    onButtonPress(){
        const { email,password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(
                    this.setState({
                        err: 'Authentification failed'
                    })
                )
            })
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@mail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={ email => this.setState( { email } ) }
                    />

                </CardSection>

                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={ password => this.setState( { password } ) }
                        secureTextEntry
                    />
                </CardSection>

                <Text style={style.errorTextStyle}> {this.state.err} </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const style = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        padding: 10
    }
}

export default LoginForm;
