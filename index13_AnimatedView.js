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
    Animated
} from 'react-native'

class AnimatedFadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {animatedValue: new Animated.Value(0)};//定义 用于动画的变量
    }

    componentDidMount() {
        Animated.timing(this.state.animatedValue,//要改变哪个变量的值
            {
                toValue: 1,
                duration: 5000,
                delay: 2000,
            }
        ).start();
    }

    render() {
        return (<Animated.View style={{opacity: this.state.animatedValue, ...this.props.style}}>
            {this.props.children}
        </Animated.View>);
    }


}

class AnimatedDemo extends Component {
    render() {
        return (<AnimatedFadeView style={{width: 300, height: 100, backgroundColor: 'red'}}>
            <Text style={{
                fontSize: 28,
                textAlign: 'center',
                margin: 10
            }}>Fading in Text</Text>
        </AnimatedFadeView>);
    }
}


AppRegistry.registerComponent("AwesomeProject", ()=> AnimatedDemo);