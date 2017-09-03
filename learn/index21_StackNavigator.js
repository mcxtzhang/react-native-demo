import React, {Component} from 'react'
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    ViewPagerAndroid,
    Animated,
    ListView,
    FlatList
} from 'react-native'
import {StackNavigator} from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
                //接收来自顶层传过来的参数
                title={this.props.screenProps.params1}
            />
        );
    }
}

class MyProfileScreen extends React.Component {

    render() {
        //setParams:
        this.props.navigation.setParams({name: "zhangxutong"});

        return (
            <Text>
                {this.props.navigation.state.params.name}+"和顶层的参数："+{this.props.screenProps.params2}
            </Text>

        );
    }
}

class TestSetParamsScreen extends Component {
    render() {
        const {setParams} = this.props.navigation;
        return (
            <Button
                onPress={() => setParams({name: 'Lucy'})}
                title="Set title name to 'Lucy'"
            />
        )
    }
}

const RouteConfigs = {
    Home: {
        screen: MyHomeScreen,
        /*        navigationOptions: ({navigation}) => ({
                    header: <Text>自定义头部</Text>,
                }),*/
    },
    Profile: {
        path: 'people/:name',
        screen: MyProfileScreen,
        // Optional: Override the `navigationOptions` for the screen
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}'s Profile`,
        }),
    },
    TestSetParams: {
        screen: TestSetParamsScreen,

    }
};

const StackNavigatorConfig = {
    navigationOptions: ({navigation}) => ({
        title: '不知道谁会覆盖谁',
    }),
    //重要 隐藏标题栏
    headerMode: 'none',

}


export const StackTest1 = StackNavigator(RouteConfigs, StackNavigatorConfig);