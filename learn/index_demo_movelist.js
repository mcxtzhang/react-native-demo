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

var MOCKED_MOVIES_DATA = [
    {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


export default class MoveList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 != row2,
            }),
            loaded: false
        };
        this.fetchDatas = this.fetchDatas.bind(this);
    }

    fetchDatas() {
        fetch(REQUEST_URL)
            .then(request => request.json())
            .then(json=> {
                console.log(json);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json.movies),
                    loaded: true
                });
            });
    }

    componentDidMount() {
        console.log("componentdidimount");
        this.fetchDatas();
    }


    render() {
        console.log("render");
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        console.log("render2");

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );

    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影数据.......
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
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
        paddingTop:30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff00ff',
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
        backgroundColor: '#ffdc00',
    },
    title: {
        fontSize: 30,
        color: '#ff1122',
        textAlign: 'center',
        marginBottom: 30,

    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#f5fcff'
    }

});

