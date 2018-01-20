import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
;
const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop: 58}}>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="System Login"/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;
