/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'
class AlignItems extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                //flexDirection:'row',
                flexDirection: 'column',
                justifyContent: 'space-between',
                //justifyContent:'center'
                //justifyContent:'flex-end'
                //justifyContent:'space-around'
                //alignItems:'center',
                //alignItems:'flex-start',
                alignItems: 'stretch',
                //注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
                // 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
                //alignItems:'flex-end',
            }}>
                <View style={styles.view1}/>
                <View style={styles.view2}/>

            </View>
        );

    }
}
;

const styles = StyleSheet.create({
    view1: {
        //width: 50,
        height: 100,
        backgroundColor: 'blue'
    },
    view2: {
        //width: 150,
        height: 100,
        backgroundColor: 'yellow'
    },
});


AppRegistry.registerComponent("AwesomeProject", ()=> AlignItems);