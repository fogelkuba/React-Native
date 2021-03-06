import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { Text } from 'react-native';
import { employeeUpdate, employeeSave, employeeDelate } from '../actions';
import { Card, CardSection, Button} from './common';
import Confirm from './common/Confirm';

class EmployeeEdit extends Component {
        state = {
            showModal: false
        };


    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate( { prop, value });
        });
    };

    onButtonPress(){
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    };

    onTextPress(){
        const { phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    };

    onAccept = () => {
        console.log('accept');
        const { uid } = this.props.employee;
        this.props.employeeDelate({ uid });
    };

    onDecline = () => {
        console.log('decline');
        this.setState({ showModal: false });
    };

    render(){
        return(
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={ () => this.setState({ showModal: !this.state.showModal }) }>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    };
};

mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelate })(EmployeeEdit);
