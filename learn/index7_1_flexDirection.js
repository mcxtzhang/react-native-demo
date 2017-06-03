/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
class FlexDirectionTest extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row',backgroundColor:'#123456'}}>
                <View style={styles.view1}></View>
                <View style={styles.view2}/>
            </View>
        );

    }
}
;

const styles = StyleSheet.create({
    view1: {
        width: 50,
        height: 100,
        backgroundColor: 'blue'
    },
    view2: {
        width: 50,
        height: 100,
        backgroundColor: 'yellow'
    },
});


AppRegistry.registerComponent("AwesomeProject", ()=> FlexDirectionTest);