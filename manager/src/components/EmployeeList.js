import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
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

export default EmployeeList;
