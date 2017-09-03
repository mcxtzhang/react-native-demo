/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import MoveList from './learn/index_demo_movelist';
import HelloText from './learn/index14_create_component';
import LifecycleComponent from './learn/index15_lifecycle'
import LifeCycleWrapper from './learn/index15_lifecycle2'
import NetTest from './learn/index16_net'
import FlatTest from './learn/index17_FlatList'
import {SimpleApp} from './learn/index18_ReactNavigation'
import {TabTest} from './learn/index19_NestingNavigators'
import {MyApp} from './learn/index20_TabRouter'
import {addNavigationHelpers} from 'react-navigation';

import {StackTest1} from './learn/index21_StackNavigator'

import SimpleStack from './learn/index21_StackNavigator_21'
import ModalStack from "./learn/index21_StackNavigator_22"

import TabNaviTest1 from './learn/index22_TabNavigator'
import TabMyBills from './learn/my_bills_list'
import LoadingFooter, {STATUS_EMPTY, STATUS_ERROR, STATUS_LOADING, STATUS_NORMAL} from "./learn/baselist/LoadingFooter";


export default class CommonSetup extends Component {
    render() {
        return (
            <View style={styles.container}
            >
                {/*<HelloText
                 name="mcxtzhang"/>*/}
                {/* <NetTest />*/}
                {/*                <FlatTest/>*/}
                {/*         <SimpleApp/>*/}
                {/*                <Text>我就在你上面咋的低了</Text>
                                <StackTest1 screenProps={{
                    //重要 ，传递参数给每个Screen
                    // this prop will get passed to the screen components as this.props.screenProps
                    params1: '参数1',
                    params2: "参数2",
                    ...this.props
                }}/>*/}
                {/*                <TabNaviTest1 screenProps={{
                    //重要 ，传递参数给每个Screen
                    // this prop will get passed to the screen components as this.props.screenProps
                    params1: '参数1',
                    params2: "参数2",
                    ...this.props
                }}
                />*/}
                <LoadingFooter ref="loadingFooter" onRetryPressed={() => {
                    this.refs.loadingFooter.changeStatus(STATUS_LOADING)
                }}/>
                <TouchableHighlight onPress={() => {
                    this.refs.loadingFooter.changeStatus(STATUS_NORMAL)
                }}>
                    <Text>点我Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.refs.loadingFooter.changeStatus(STATUS_LOADING)
                }}>
                    <Text>点我Loading</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.refs.loadingFooter.changeStatus(STATUS_EMPTY)
                }}>
                    <Text>点我Empty</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.refs.loadingFooter.changeStatus(STATUS_ERROR)
                }}>
                    <Text>点我Error</Text>
                </TouchableHighlight>
            </View>
        );
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
