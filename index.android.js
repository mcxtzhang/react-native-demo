/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
class FlexTest extends Component {
    render() {
        return (
            // 试试去掉父View中的`flex: 1`。
            // 则父View不再具有尺寸，因此子组件也无法再撑开。
            // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
            <View style={{backgroundColor: 'blue', height:300}}>
                <Text style={{backgroundColor: 'yellow'}}>red</Text>
                <Text style={{backgroundColor: 'black'}}>red</Text>
                <Text style={{backgroundColor: 'skyblue'}}>red</Text>
                <View style={{backgroundColor: 'powderblue', width: 40, height: 50}}/>
                <View style={{backgroundColor: 'powderblue', flex: 1}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent("AwesomeProject", ()=> FlexTest);