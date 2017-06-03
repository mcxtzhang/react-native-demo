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

import LifecycleComponent from './index15_lifecycle'

export default class LifeCycleWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    render() {
        let view = this.state.isShow ? <LifecycleComponent/> : null;
        return <View style={{flex :1}}>
            {view}
            <Text onPress={()=> {
                this.setState({isShow: !this.state.isShow});
            }
            }> 点我切换状态</Text>
        </View>;
    }
}