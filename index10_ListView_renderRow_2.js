/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, Image, ListView} from 'react-native'

class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        //step 1 定义rowHasChanged 规则
        const dataRules = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 != r2});
        //stpe 2 定义数据源
        this.state = {
            datas: dataRules.cloneWithRows(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']),
        };
    }

    renderPerRow(data) {
        return (
            <View style={{height: 200, flexDirection: 'row'}}>
                <Text style={{padding: 10, color: 'red'}}>{data}</Text>
                <Image source={require('./zly.jpg')}/>
            </View>

        );
    }

    render() {
        //Step 3 通过 ListView的 dataSource 和 renderRow 属性 设置数据源 渲染UI
        return (<View style={{flex: 1, paddingTop: 2}}>

            <ListView
                dataSource={this.state.datas}
                renderRow={this.renderPerRow}/>
        </View>);
    }


}
AppRegistry.registerComponent("AwesomeProject", ()=> ListViewDemo);