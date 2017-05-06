/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TextInput} from 'react-native'

class TextInputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '',
        temp:''};
    }

    /*    onChangeTextListener(text2) {
     this.setState({text: text2});
     }*/

    render() {
        return (
            <View style={{
                padding: 10,
                backgroundColor: 'yellow'
            }}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate"
                    onChangeText={(text)=>
                        this.setState({text})
                    }
                />
                <Text style={{
                    padding: 10,
                    fontSize: 42
                }}>
                    {this.state.text.split(' ')
                        .map((word) => 'placeholder')
                        .join('??')}
                </Text>

            </View>

        );
    }

}


AppRegistry.registerComponent("AwesomeProject", ()=> TextInputTest);