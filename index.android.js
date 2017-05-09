/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TextInput,ScrollView,Image} from 'react-native'


class ScrollViewTest extends Component {
    render() {
        return (
            <ScrollView pagingEnabled = {true}>
                <Text> 厉害了 我的哥 这是一个ScrollView</Text>
                <Image
                    style={{width:50,height:50}}
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Text> 第二页</Text>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>
                <Image
                    source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}}/>
                <Image source={require('./zly.jpg')}/>


            </ScrollView>
        );
    }
}
AppRegistry.registerComponent("AwesomeProject", ()=> ScrollViewTest);