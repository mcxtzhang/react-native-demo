/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, Image, ListView,TouchableHighlight} from 'react-native'

class MyButton extends Component {
    onPressButton() {
        console.log("U tapped the btn!");
    }

    render() {
        return (<TouchableHighlight onPress={this.onPressButton}>
            <Text> Button</Text>
        </TouchableHighlight>);
    }
}
AppRegistry.registerComponent("AwesomeProject", ()=> MyButton);