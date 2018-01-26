import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {

    const {sceneStyles} = styles;

    return(
        <Router sceneStyle={{paddingTop: 60}}>
            <Scene key="root" >
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="System Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene
                        style={sceneStyles}
                        rightTitle="Add"
                        onRight={ ()=> Actions.employeeCreate() }
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene
                        style={sceneStyles}
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    )
};

const styles={
    sceneStyles:{
        paddingTop: 5
    }
}

export default RouterComponent;
