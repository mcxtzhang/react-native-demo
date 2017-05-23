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

var MOCKED_MOVIES_DATA = [
    {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class MoveList extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];
        return (
            <View style={styles.container}>
                <Image
                    style={styles.thumnail}
                    source={{uri: movie.posters.thumbnail} }
                ></Image>

                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text>{movie.year}</Text>
                </View>


            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
        flexDirection: 'row'
    },
    thumnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdc5b',
    },
    title: {
        fontSize: 30,
        textAlign:'center',
        marginBottom:30,

    }

});


AppRegistry.registerComponent("AwesomeProject", ()=> MoveList);