import ReactNative, { AppRegistry } from 'react-native';
import React, {Component} from 'react';
import App from './App';

import {Provider} from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

class reduxFetchExample extends Component {
    render(){
        return(
            <Provider store = {store}>
                <App/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('reduxFetchExample', () => reduxFetchExample);
