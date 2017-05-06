/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
class WidthHeightTest extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 100, height: 200, backgroundColor: '#00ff00'}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent("AwesomeProject", ()=> WidthHeightTest);