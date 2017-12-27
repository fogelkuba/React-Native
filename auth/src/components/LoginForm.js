import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        value={this.state.text}
                        onChangeText={ text => this.setState( { text } ) }
                        label="Email"
                    />

                </CardSection>

                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;
