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
    ViewPagerAndroid,
    Animated,
    ListView
} from 'react-native'

//定义组件方法二 es5
/*var HelloText = React.createClass({
 render(){
 return <Text style={ {
 fontSize: 20,
 backgroundColor: 'red'
 }}> Hello world!</Text>
 }
 });
 module.exports = HelloText;*/


//方式三 函数式  :无状态，不能用this
function HelloText(props) {
    return <Text style={{
        fontSize: 30,
        color: 'red'
    }}>Hello {props.name}</Text>
}
module.exports = HelloText