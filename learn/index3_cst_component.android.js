/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetingss extends Component {
    render() {
        return (
            <View style={  {alignItems: 'center'} }>
                <Greeting name="mcxtzhang"/>
                <Greeting name="zhangxutong"/>
            </View>
        );
    }
}

AppRegistry.registerComponent("AwesomeProject", ()=> LotsOfGreetingss);