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
import {StackNavigator, TabNavigator} from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../img/logo.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title={this.props.screenProps.params1}
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../img/icon_arrow.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title={this.props.screenProps.params2}
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

//TabNavigator的RouteConfigs和StackNavigator的一样
const RouteConfigs = {
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
};
//TabNavigatorConfig和StackNavigator不一样
const TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor:"#123456",
        activeBackgroundColor:"#666666",
        style: {
            backgroundColor: 'red',
        }
    },
    lazy: true,
    backBehavior: "none",
}


const TabNaviTest1 = TabNavigator(RouteConfigs, TabNavigatorConfig);

export default TabNaviTest1