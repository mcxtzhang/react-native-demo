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

import {TabNavigator} from "react-navigation";


const FirstTab = class RecentChatsScreen extends React.Component {
    render() {
        let {state} = this.props.navigation;
        return <Text>List of recent chats:{state.params}</Text>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        return <View>
            <Text>List of all contacts</Text>
            <Button
                onPress={() => this.props.navigation.navigate('Chat', {user: 'Lucy'})}
                title="Chat with Lucy"
            />

        </View>
    }
}


export const TabTest = TabNavigator({
    Recent: {
        screen: FirstTab,
        params: {hello: 'world'}
    },
    All: {screen: AllContactsScreen},
}, {
    initialRouteName: 'Recent',
    initialRouteParams: {canshu: '初始页面参数'},
    tabBarOptions: {
        activeTintColor: '#123456',
        inactiveTintColor: '#987654'
    }
});

TabTest.navigationOptions = {
    title: 'My Chats',
};


class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.canshu}`,
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

/*export const TabTest = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen},
},);*/


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