/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class Blink extends Component {
    //一般需要在 constructor'里初始化state
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(()=> {
            //this.setState({showText: !this.state.showText});

            this.setState(previousState =>{
                return {showText: !previousState.showText}
            });
        }, 300);
    }

    render() {
        let display = this.state.showText ? this.props.text : '  ';
        return (
            <Text>{display}</Text>
        );
    }
}


class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text="I love to blink"/>
                <Blink text="I love React Native !"/>

            </View>
        );
    }
}

AppRegistry.registerComponent("AwesomeProject", ()=> BlinkApp);