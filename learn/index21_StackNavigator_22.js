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
    FlatList,
} from 'react-native'
import {StackNavigator} from 'react-navigation';

const MyNavScreen = ({navigation, banner}) => (
    <ScrollView>
        <Text>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('HeaderTest')}
            title="Go to a header toggle screen"
        />
        //这里写的很有意思
        {navigation.state.routeName === 'HeaderTest' &&
        <Button
            title="Toggle Header"
            onPress={() =>
                navigation.setParams({
                    headerVisible: !navigation.state.params ||
                    !navigation.state.params.headerVisible,
                })}
        />}
        <Button onPress={() => navigation.goBack(null)} title="Go back"/>
    </ScrollView>
);

const MyHomeScreen = ({navigation}) => (
    <MyNavScreen banner="Home Screen" navigation={navigation}/>
);
MyHomeScreen.navigationOptions = {
    title: 'Welcome',
};

const MyProfileScreen = ({navigation}) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}'s Profile`}
        navigation={navigation}
    />
);
MyProfileScreen.navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.name}'s Profile!`,
});

const ProfileNavigator = StackNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        Profile: {
            path: 'people/:name',
            screen: MyProfileScreen,
        },
    },
    {
        navigationOptions: {
            header: null,
        },
    }
);

const MyHeaderTestScreen = ({navigation}) => (
    <MyNavScreen banner={`Full screen view`} navigation={navigation}/>
);
MyHeaderTestScreen.navigationOptions = ({navigation}) => {
    const headerVisible =
        navigation.state.params && navigation.state.params.headerVisible;
    return {
        header: headerVisible ? undefined : null,
        title: 'Now you see me',
    };
};

const ModalStack = StackNavigator(
    {
        Home: {
            screen: MyHomeScreen,
        },
        ProfileNavigator: {
            screen: ProfileNavigator,
        },
        HeaderTest: {screen: MyHeaderTestScreen},
    },
    {   //android 无效 的属性
        mode: 'modal',
    }
);

export default ModalStack;