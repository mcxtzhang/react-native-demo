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

import {TabNavigator, TabRouter} from "react-navigation";

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'WelcomeTitle',
    }

    render() {
        const {navigate} = this.props.navigation;
        const {state} = this.props.navigation;
        return (
            <View>
                <Text>Hello,Navigation!:</Text>

                <Button
                    onPress={() => navigate('Chat', {user: "Zhangxutong"})}
                    title="Chat with Zhangxutong"
                />
            </View>

        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
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

export const MyApp = TabRouter({
    Home: {screen: HomeScreen},
    Settings: {screen: ChatScreen},
}, {
    initialRouteName: 'Home',
})