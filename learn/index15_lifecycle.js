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

export default class LifecycleComponent extends Component {
    constructor(props) {
        console.log('constructor' + props);
        super(props);
        this.state = {
            count: 0
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return (
            <View style={{flex: 1}}>
                <Text onPress={()=>this.setState({
                    count: this.state.count + 1,
                })}>有种就打我</Text>
                <Text style={{fontSize: 20, color: 'red'}}>
                    DPS : {this.state.count}
                </Text>
            </View>
        )

    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    //更新

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate' + nextProps + ",  nextState:" + nextState.count);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    //卸载
    componentWillUnmount() {
        console.log('componentWillUnMount');

    }


}