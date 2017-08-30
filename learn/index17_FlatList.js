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
    ListView,
    FlatList
} from 'react-native'
import NetUtils from './../common/NetUtils'


export default class FlatTest extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            datas: [
                {name: "David1",},
                {name: "David2",},
                {name: "David3",},
                {name: "David4",},
                {name: "David5",},
                {name: "David6",},
                {name: "David7",},
                {name: "David8",},
                {name: "David9",},
            ]
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.datas}
                    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}


                />


            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        height: 200,
        backgroundColor: '#123456'
    },
})