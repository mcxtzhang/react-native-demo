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
    FlatList,
    TouchableOpacity
} from 'react-native'
import NetUtils from './../common/NetUtils'
import {STATUS_LOADING, STATUS_NORMAL} from "./baselist/LoadingFooter";

class ListItem extends Component {
    onPress = () => {
        //点击事件通过props设置，同时回调props.id回去
        this.props.onPressItem(this.props.id);
    }

    render() {
        return (<TouchableOpacity {...this.props}
                                  onPress={this.onPress}>
            <Text>fajlskfjaslfj;asdl</Text>
            <Text style={styles.item}>{this.props.itemData.name}</Text>

        </TouchableOpacity>);
    }
}


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

            ],
            count: 0,
            status: STATUS_NORMAL,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref="listView"

                    data={this.state.datas}
                    renderItem={this.renderItem}

                    onEndReached={this.reachEnd.bind(this)}
                    onEndReachedThreshold="0.1"

                    onRefresh={this.refresh.bind(this)}
                    refreshing={this.state.status == STATUS_LOADING}

                    ListFooterComponent={() => <Text>I am footer</Text>}

                    ItemSeparatorComponent={() => <Text>I am divide</Text>}

                    ListEmptyComponent={() => <Text>我曹！服务器什么数据都没给</Text>}
                />


            </View>

        );
    }

    reachEnd() {
        console.log('on end....:' + this.state.count);
        this.setState({count: this.state.count});
    }

    refresh() {
        console.log('on refresh....:');
        this.setState({status: STATUS_LOADING});
        //this.refs.listView.se(true);
    }

    renderItem = ({item}) => (
        <ListItem
            itemData={item}
            onPressItem={this.onPressItem}
            id={item.name}
        />)


    onPressItem = (id) => {
        console.log("press Item:" + id);
        //另外让列表停止刷新
        this.setState({status: STATUS_NORMAL});
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