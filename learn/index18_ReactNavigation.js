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

const main = class HomeScreen extends Component {
    static navigationOptions = {
        title: 'WelcomeTitle',
    }

    render() {
        const {navigate} = this.props.navigation;
        const {state} = this.props.navigation;
        return (
            <View>
                <Text>Hello,Navigation!:{state.params}</Text>
                <Text>Hello!:{this.props.navigation.state.params.canshu}</Text>

                <Button
                    onPress={() => navigate('Chat', {user: "Zhangxutong"})}
                    title="Chat with Zhangxutong"
                />
            </View>

        );
    }
}

class ChatScreen extends React.Component {
    /*    static navigationOptions = ({navigation}) => ({
            title: `Chat with ${navigation.state.params.user}`,
        });*/

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

export const SimpleApp = StackNavigator({
    Home: {
        screen: main,
        navigationOptions: ({navigation}) => ({
            title: '首页',
            header: <Text>自定义头部</Text>,
        }),
    },
    Chat: {screen: ChatScreen},
}, {
    initialRouteName: 'Home',

    navigationOptions: {
        title: '标题',
        headerTitleStyle: {fontSize: 18, color: '#666666'},
        headerStyle: {height: 48, backgroundColor: '#fff'},
    },
    paths: 'page/main',
    mode: 'card',
    headerMode: 'screen',
    cardStyle: {backgroundColor: "#ffffff"},
});


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