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
    ProgressBarAndroid,
    TouchableHighlight,
} from 'react-native'


export const STATUS_NORMAL = "normal";
export const STATUS_LOADING = "loading";
export const STATUS_EMPTY = "empty";
export const STATUS_ERROR = "error";

class Normal extends Component {
    render() {
        return (<View style={{backgroundColor: "#666666"}}>
            <Text>
                准备加载更多...
            </Text>
        </View>);
    }
}

class Loading extends Component {
    render() {
        return (<View style={{backgroundColor: "#666666"}}>
            <ProgressBarAndroid styleAttr='Inverse' color="#29A1F7"/>
            <Text>
                正在加载更多...
            </Text>
        </View>);
    }
}

class Empty extends Component {
    render() {
        return (<View style={{backgroundColor: "#666666"}}>
            <Text>
                就这么多了哦/(ㄒoㄒ)/~~
            </Text>
        </View>);
    }
}

class Error extends Component {
    render() {
        return (<View style={{backgroundColor: "#666666"}}>
            <TouchableHighlight onPress={this.props.onRetryPressed.bind(this)}>
                <Text>
                    加载出错了 点我重试/(ㄒoㄒ)/~~
                </Text>
            </TouchableHighlight>

        </View>);
    }

}


export default class LoadingFooter extends Component {


    constructor(props) {
        super(props);
        this.state = ({
            status: this.props.status ? this.props.status : STATUS_NORMAL,
        });
    }


    render() {
        return (
            <View style={styles.container}>
                {this.state.status == STATUS_NORMAL && <Normal/>}
                {this.state.status == STATUS_LOADING && <Loading/>}
                {this.state.status == STATUS_EMPTY && <Empty/>}
                {this.state.status == STATUS_ERROR && <Error onRetryPressed={this.props.onRetryPressed.bind(this)}/>}
            </View>

        );
    }

    //外部调用改变状态
    changeStatus(status) {
        this.setState({status: status});
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center',
    },

})