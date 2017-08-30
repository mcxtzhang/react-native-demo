/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import MoveList from './learn/index_demo_movelist';
import HelloText from './learn/index14_create_component';
import LifecycleComponent from './learn/index15_lifecycle'
import LifeCycleWrapper from './learn/index15_lifecycle2'
import NetTest from './learn/index16_net'
import FlatTest from './learn/index17_FlatList'

export default class CommonSetup extends Component {
    render() {
        return (
            <View style={styles.container}
            >
                {/*<HelloText
                 name="mcxtzhang"/>*/}
                {/* <NetTest />*/}
                <FlatTest/>
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
