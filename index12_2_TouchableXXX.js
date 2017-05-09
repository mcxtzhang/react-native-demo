/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    ListView,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native'

class MyButton extends Component {
    onPressButton() {
        console.log("U tapped the btn!");
    }

    onLongPresss(){
        console.log('Long press!!!');
    }

    render() {
        return (
            <View flexDirection='column'>

                <TouchableHighlight onPress={this.onPressButton}>
                    <Text> Button</Text>
                </TouchableHighlight>

                <TouchableOpacity onLongPress={this.onLongPresss}>
                    <Text>Only change alpha </Text>
                </TouchableOpacity>


                <TouchableNativeFeedback onPress={this.onPressButton}>
                    <Text>can not set Image in Touchablexxx</Text>
                </TouchableNativeFeedback>
            </View>

        );
    }
}
AppRegistry.registerComponent("AwesomeProject", ()=> MyButton);