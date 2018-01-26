import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';


class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeesFetch();
    }

    render(){
        return(
            <View>
                <Text>Employee List</Text>
                <Text>Employer 1</Text>
                <Text>Employer 2</Text>
                <Text>Employer 3</Text>
            </View>
        );
    }
}

export default connect(null, { employeesFetch })(EmployeeList);
