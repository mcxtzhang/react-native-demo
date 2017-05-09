/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, Image, ViewPagerAndroid} from 'react-native'

class ViewPager extends Component {
    render() {
        return (<ViewPagerAndroid
            initialPage={0}
            style={{
                alignItems: 'center',
                padding: 20
            }}>
            <View>
                <Text>First Page</Text>
            </View>
            <View>
                <Text>Second page</Text>
            </View>
        </ViewPagerAndroid>);
    }
}
AppRegistry.registerComponent("AwesomeProject", ()=> ViewPager);