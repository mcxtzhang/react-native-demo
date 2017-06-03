/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={ styles.zBlue   }>blue text </Text>
                <Text style={ styles.zRed   }>red text </Text>
                <Text style={[styles.zBlue, styles.zRed]}>blud then red</Text>
                <Text style={[styles.zRed, styles.zBlue]}>red and blue</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    zBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    zRed: {
        color: 'red',
    }


});

AppRegistry.registerComponent("AwesomeProject", ()=> LotsOfStyles);