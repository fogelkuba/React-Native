import React, { Component } from 'react';
import { Card, CardSection, Input, Button} from './common';

class EmploeeCreate extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="John"
                />
                </CardSection>
                
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmploeeCreate;
