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
import LoadingFooter, {STATUS_ERROR, STATUS_LOADING, STATUS_NORMAL} from "./baselist/LoadingFooter";

//可替换的 ItemView
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
            //状态：
            status: STATUS_NORMAL,
            footerStatus: STATUS_NORMAL,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref="listView"

                    data={this.state.datas}
                    renderItem={this.renderItem}

                    onEndReached={this.reachEnd}
                    onEndReachedThreshold="0.1"

                    onRefresh={this.refresh.bind(this)}
                    refreshing={this.state.status == STATUS_LOADING}

                    ListFooterComponent={this.renderFooter.bind(this)}

                    ItemSeparatorComponent={() => <Text>I am divide</Text>}

                    ListEmptyComponent={() => <Text>我曹！服务器什么数据都没给</Text>}
                />


            </View>

        );
    }


    renderFooter() {
        return <LoadingFooter
            status={this.state.footerStatus}
            onRetryPressed={() => {
                //重试加载更多
            }}/>
    };

    reachEnd = () => {
        if (this.state.footerStatus == STATUS_NORMAL) {
            //触发刷新 需要回调 同时进入loading状态
            this.setState({footerStatus: STATUS_LOADING});
            console.log('on end....:' + this.state.footerStatus);
        } else {
            //其他状态都不管
            console.log('on end....:' + this.state.footerStatus);
        }
        console.log('on end....:');
    }

    //刷新回调
    refresh() {
        console.log('on refresh....:');
        this.setState({status: STATUS_LOADING});
        //this.refs.listView.se(true);
    }

    //渲染逻辑
    renderItem = ({item}) => (
        <ListItem
            itemData={item}
            onPressItem={this.onPressItem}
            id={item.name}
        />)

    //点击回调
    onPressItem = (id) => {
        console.log("press Item:" + id);
        //另外让列表停止刷新
        this.setState({status: STATUS_NORMAL});
        this.setState({footerStatus: STATUS_NORMAL});
        const newDatas= [
            {name: "David11",},
            {name: "David12",},
            {name: "David13",},
            {name: "David14",},
            {name: "David15",},
            {name: "David16",},
            {name: "David17",},
            {name: "David18",},
            {name: "David19",},

        ];
        this.setState({datas:this.state.datas.concat(newDatas)});
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