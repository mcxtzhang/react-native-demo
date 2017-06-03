/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React,{Component} from 'react'
import {AppRegistry,Text} from 'react-native'
class HelloWorldApp extends Component {
    render() {
        return (
            <Text> Hello World! </Text>
        );
    }
}

AppRegistry.registerComponent("AwesomeProject", ()=> HelloWorldApp);